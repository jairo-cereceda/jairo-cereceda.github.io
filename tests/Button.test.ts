import { describe, it, expect } from 'vitest';

function renderButton(data: {
  text: string;
  url: string;
  icon?: string;
  style?: 'primary' | 'secondary';
}) {
  const style = data.style ?? 'primary';

  return `
    <a href="${data.url}" class="${style}">
      ${data.text}
      ${
        data.icon
          ? `
        <span>
          <icon name="${data.icon}"></icon>
          <icon name="${data.icon}"></icon>
        </span>
      `
          : ''
      }
    </a>
  `;
}

describe('Button component', () => {
  it('renders the text', () => {
    const html = renderButton({
      text: 'View project',
      url: '/project',
    });

    expect(html).toContain('View project');
  });

  it('uses the correct href', () => {
    const html = renderButton({
      text: 'GitHub',
      url: 'https://github.com',
    });

    expect(html).toContain('href="https://github.com"');
  });

  it('uses primary style by default', () => {
    const html = renderButton({
      text: 'Button',
      url: '/test',
    });

    expect(html).toContain('class="primary"');
  });

  it('uses secondary style when specified', () => {
    const html = renderButton({
      text: 'Button',
      url: '/test',
      style: 'secondary',
    });

    expect(html).toContain('class="secondary"');
  });

  it('renders icons when icon is provided', () => {
    const html = renderButton({
      text: 'GitHub',
      url: '/github',
      icon: 'github',
    });

    expect(html).toContain('name="github"');
  });

  it('does not render icons if icon does not exist', () => {
    const html = renderButton({
      text: 'Button',
      url: '/test',
    });

    expect(html).not.toContain('<icon');
  });
});
