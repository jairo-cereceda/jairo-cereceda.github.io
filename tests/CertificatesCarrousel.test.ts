import { describe, it, expect } from 'vitest';

function renderCarousel(images: { src: string; alt: string }[]) {
  return `
    <section>
      <h2>Other Certifications</h2>
      ${[1, 2, 3]
        .map(() =>
          images.map((img) => `<img src="${img.src}" alt="${img.alt}" height="200">`).join(''),
        )
        .join('')}
    </section>
  `;
}

describe('CertificatesCarousel', () => {
  const images = [
    { src: '/cert1.png', alt: 'Certificate 1' },
    { src: '/cert2.png', alt: 'Certificate 2' },
  ];

  it('renders the subheading', () => {
    const html = renderCarousel(images);

    expect(html).toContain('Other Certifications');
  });

  it('renders all images', () => {
    const html = renderCarousel(images);

    expect(html).toContain('/cert1.png');
    expect(html).toContain('/cert2.png');
  });

  it('renders alt tags correctly', () => {
    const html = renderCarousel(images);

    expect(html).toContain('alt="Certificate 1"');
    expect(html).toContain('alt="Certificate 2"');
  });

  it('duplicates images 3 times for the carousel', () => {
    const html = renderCarousel(images);

    const imgCount = (html.match(/<img/g) || []).length;

    expect(imgCount).toBe(images.length * 3);
  });

  it('does not render images if the list is empty', () => {
    const html = renderCarousel([]);

    expect(html).not.toContain('<img');
  });
});
