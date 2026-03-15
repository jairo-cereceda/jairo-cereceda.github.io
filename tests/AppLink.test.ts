import { describe, it, expect } from 'vitest';

function renderAppLink(data: { url: string; icon: string; text: string }) {
  return `
    <a href="${data.url}">
      <div>
        <icon name="${data.icon}"></icon>
        ${data.text}
      </div>
      <icon name="arrow-right"></icon>
    </a>
  `;
}

describe('AppLink', () => {
  it('renders the text', () => {
    const html = renderAppLink({
      url: '/github',
      icon: 'github',
      text: 'GitHub',
    });

    expect(html).toContain('GitHub');
  });

  it('uses the correct href', () => {
    const html = renderAppLink({
      url: '/linkedin',
      icon: 'linkedin',
      text: 'LinkedIn',
    });

    expect(html).toContain('href="/linkedin"');
  });

  it('uses the provided icon', () => {
    const html = renderAppLink({
      url: '/github',
      icon: 'github',
      text: 'GitHub',
    });

    expect(html).toContain('name="github"');
  });

  it('renders the arrow icon', () => {
    const html = renderAppLink({
      url: '/github',
      icon: 'github',
      text: 'GitHub',
    });

    expect(html).toContain('name="arrow-right"');
  });
});
