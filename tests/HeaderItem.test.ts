import { describe, it, expect } from 'vitest';

function renderHeaderItem(data: { url: string; icon: string; text: string }, currentPath = '/') {
  const isActive = currentPath === data.url;

  return `
    <li>
      <a href="${data.url}" aria-label="${data.text}">
        <icon name="${data.icon}"></icon>
        <span>${data.text}</span>
      </a>
      ${isActive ? '<!-- active -->' : ''}
    </li>
  `;
}

describe('HeaderItem component', () => {
  it('renders the text', () => {
    const html = renderHeaderItem({ url: '/home', icon: 'home', text: 'Home' });
    expect(html).toContain('Home');
  });

  it('adds aria-label with the text', () => {
    const html = renderHeaderItem({ url: '/home', icon: 'home', text: 'Home' });
    expect(html).toContain('aria-label="Home"');
  });

  it('uses the correct href', () => {
    const html = renderHeaderItem({ url: '/about', icon: 'info', text: 'About' });
    expect(html).toContain('href="/about"');
  });

  it('uses the provided icon', () => {
    const html = renderHeaderItem({ url: '/home', icon: 'home', text: 'Home' });
    expect(html).toContain('name="home"');
  });

  it('marks as active if currentPath matches url', () => {
    const html = renderHeaderItem({ url: '/home', icon: 'home', text: 'Home' }, '/home');
    expect(html).toContain('<!-- active -->');
  });

  it('does not mark as active if currentPath does not match url', () => {
    const html = renderHeaderItem({ url: '/home', icon: 'home', text: 'Home' }, '/about');
    expect(html).not.toContain('<!-- active -->');
  });
});
