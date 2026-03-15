import { describe, it, expect } from 'vitest';

function renderTimeline(items: { title: string; position: string }[]) {
  return `
    <div>
      ${items
        .map(
          (item, index) => `
          <div class="flex">
            <icon name="circle"></icon>
            <div>
              <h2>${item.title}</h2>
              <p>${item.position}</p>
            </div>
          </div>
          ${index !== items.length - 1 ? '<div class="divider"></div>' : ''}
        `,
        )
        .join('')}
    </div>
  `;
}

describe('Timeline component', () => {
  const sampleItems = [
    { title: 'Project 1', position: 'Developer' },
    { title: 'Project 2', position: 'Lead' },
    { title: 'Project 3', position: 'Consultant' },
  ];

  it('renders all titles and positions', () => {
    const html = renderTimeline(sampleItems);
    sampleItems.forEach((item) => {
      expect(html).toContain(item.title);
      expect(html).toContain(item.position);
    });
  });

  it('renders one icon for each item', () => {
    const html = renderTimeline(sampleItems);
    const iconCount = (html.match(/<icon/g) || []).length;
    expect(iconCount).toBe(sampleItems.length);
  });

  it('renders dividers only between items, not after the last one', () => {
    const html = renderTimeline(sampleItems);
    const dividerCount = (html.match(/<div class="divider"/g) || []).length;
    expect(dividerCount).toBe(sampleItems.length - 1);
  });

  it('handles an empty list without errors', () => {
    const html = renderTimeline([]);
    expect(html).not.toContain('<icon');
    expect(html).not.toContain('<h2>');
  });
});
