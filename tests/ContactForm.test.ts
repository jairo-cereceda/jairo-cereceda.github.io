import { describe, it, expect, beforeEach, vi } from 'vitest';

function setupFormDOM() {
  document.body.innerHTML = `
    <p id="form-status" role="alert" aria-live="polite" class="opacity-0"></p>
    <form id="contact-form">
      <input type="text" name="name" id="name" />
      <input type="email" name="_replyto" id="email" />
      <textarea name="message" id="message"></textarea>
      <button type="submit">Enviar</button>
    </form>
  `;
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const status = document.getElementById('form-status') as HTMLParagraphElement;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('_replyto') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Completa todos los campos.';
      status.classList.add('text-red-400');
      status.classList.remove('opacity-0');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.textContent = 'Ingresa un correo válido.';
      status.classList.add('text-red-400');
      status.classList.remove('opacity-0');
      return;
    }

    try {
      const res = await fetch('https://formspree.io/f/xeerlnjw', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        status.textContent = '¡Mensaje enviado, gracias!';
        status.classList.remove('opacity-0');
        status.classList.add('text-green-400');
        form.reset();
      } else {
        status.textContent = 'Hubo un error.';
        status.classList.remove('opacity-0');
        status.classList.add('text-red-400');
      }
    } catch {
      status.textContent = 'Hubo un error de conexión.';
      status.classList.remove('opacity-0');
      status.classList.add('text-red-400');
    }
  });

  return { form, status };
}

describe('ContactForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('shows error if there are empty fields', async () => {
    const { form, status } = setupFormDOM();
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    expect(status.textContent).toBe('Completa todos los campos.');
    expect(status.classList.contains('text-red-400')).toBe(true);
    expect(status.classList.contains('opacity-0')).toBe(false);
  });

  it('shows error if email is invalid', async () => {
    const { form, status } = setupFormDOM();
    (form.elements.namedItem('name') as HTMLInputElement).value = 'Jairo';
    (form.elements.namedItem('_replyto') as HTMLInputElement).value = 'correo-invalido';
    (form.elements.namedItem('message') as HTMLTextAreaElement).value = 'Hola';
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    expect(status.textContent).toBe('Ingresa un correo válido.');
  });

  it('submits the form correctly and shows success message', async () => {
    const { form, status } = setupFormDOM();
    (form.elements.namedItem('name') as HTMLInputElement).value = 'Jairo';
    (form.elements.namedItem('_replyto') as HTMLInputElement).value = 'jairo@example.com';
    (form.elements.namedItem('message') as HTMLTextAreaElement).value = 'Hola';

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
      } as Response),
    ) as any;

    await form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    expect(status.textContent).toBe('¡Mensaje enviado, gracias!');
    expect(status.classList.contains('text-green-400')).toBe(true);
    expect(status.classList.contains('opacity-0')).toBe(false);
  });

  it('handles fetch error', async () => {
    const { form, status } = setupFormDOM();
    (form.elements.namedItem('name') as HTMLInputElement).value = 'Jairo';
    (form.elements.namedItem('_replyto') as HTMLInputElement).value = 'jairo@example.com';
    (form.elements.namedItem('message') as HTMLTextAreaElement).value = 'Hola';

    global.fetch = vi.fn(() => Promise.reject('error')) as any;

    await form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    expect(status.textContent).toBe('Hubo un error de conexión.');
    expect(status.classList.contains('text-red-400')).toBe(true);
  });
});
