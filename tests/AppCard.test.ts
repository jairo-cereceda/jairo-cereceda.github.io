import { describe, it, expect } from 'vitest';

function renderAppCard(data: {
  title: string;
  techs: string;
  imgSrc: string;
  imgAlt?: string;
  isStudentApp?: boolean;
  url?: string;
}) {
  return `
    <div>
      ${data.isStudentApp ? '<span>Student project</span>' : ''}
      <h3>${data.title}</h3>
      <div>
        <p>${data.techs}</p>
        ${
          data.url
            ? `<a href="${data.url}" target="_blank" rel="noreferrer noopener">
                 <icon name="eye"></icon> View Project
               </a>`
            : ''
        }
      </div>
      <img src="${data.imgSrc}" alt="${data.imgAlt ?? ''}" />
    </div>
  `;
}

describe('AppCard', () => {
  it('renders the title', () => {
    const html = renderAppCard({
      title: 'My application',
      techs: 'Astro, Tailwind',
      imgSrc: '/app.png',
    });
    expect(html).toContain('My application');
  });

  it('renders the technologies', () => {
    const html = renderAppCard({
      title: 'My application',
      techs: 'Astro, Tailwind',
      imgSrc: '/app.png',
    });
    expect(html).toContain('Astro, Tailwind');
  });

  it('renders the image with the correct src', () => {
    const html = renderAppCard({
      title: 'My application',
      techs: 'Astro',
      imgSrc: '/test.png',
    });
    expect(html).toContain('src="/test.png"');
  });

  it('uses empty alt when imgAlt is not provided', () => {
    const html = renderAppCard({
      title: 'My application',
      techs: 'Astro',
      imgSrc: '/test.png',
    });
    expect(html).toContain('alt=""');
  });

  it('uses imgAlt when provided', () => {
    const html = renderAppCard({
      title: 'My application',
      techs: 'Astro',
      imgSrc: '/test.png',
      imgAlt: 'App screenshot',
    });
    expect(html).toContain('alt="App screenshot"');
  });

  it('shows the badge if isStudentApp is true', () => {
    const html = renderAppCard({
      title: 'My application',
      techs: 'Astro',
      imgSrc: '/test.png',
      isStudentApp: true,
    });
    expect(html).toContain('Student project');
  });

  it('does not show the badge if it is not a student project', () => {
    const html = renderAppCard({
      title: 'My application',
      techs: 'Astro',
      imgSrc: '/test.png',
    });
    expect(html).not.toContain('Student project');
  });

  it('shows the url link if defined', () => {
    const html = renderAppCard({
      title: 'My application',
      techs: 'Astro',
      imgSrc: '/test.png',
      url: 'https://example.com',
    });
    expect(html).toContain('href="https://example.com"');
    expect(html).toContain('View Project');
    expect(html).toContain('name="eye"');
  });

  it('does not show link if url is not defined', () => {
    const html = renderAppCard({
      title: 'My application',
      techs: 'Astro',
      imgSrc: '/test.png',
    });
    expect(html).not.toContain('<a href=');
    expect(html).not.toContain('View Project');
  });
});
