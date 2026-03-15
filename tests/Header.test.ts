import { describe, it, expect } from 'vitest';

function renderHeader(items: { url: string; icon: string; text: string }[]) {
  return `
    <header>
      <nav>
        <ul>
          ${items
            .map(
              (item) => `
              <li>
                <span>${item.text}</span>
              </li>
            `,
            )
            .join('')}
        </ul>
      </nav>
    </header>
  `;
}

describe('Header component', () => {
  const sampleItems = [
    { url: '/home', icon: 'home', text: 'Home' },
    { url: '/about', icon: 'info', text: 'About' },
    { url: '/contact', icon: 'mail', text: 'Contact' },
  ];

  it('renders the header and ul container', () => {
    const html = renderHeader(sampleItems);
    expect(html).toContain('<header>');
    expect(html).toContain('<ul>');
  });

  it('renders all items', () => {
    const html = renderHeader(sampleItems);
    sampleItems.forEach((item) => {
      expect(html).toContain(item.text);
    });
  });

  it('handles an empty list without errors', () => {
    const html = renderHeader([]);
    expect(html).toContain('<header>');
    expect(html).toContain('<ul>');
  });

  it('renders the correct number of items', () => {
    const html = renderHeader(sampleItems);
    const itemCount = (html.match(/<li>/g) || []).length;
    expect(itemCount).toBe(sampleItems.length);
  });
});
