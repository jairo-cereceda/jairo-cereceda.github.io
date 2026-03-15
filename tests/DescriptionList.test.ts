import { describe, it, expect } from 'vitest';

function renderDescriptionList(data: { text: string; items: string[] }) {
  return `
    <div class="text-white">
      <p class="text-center text-xl font-bold">${data.text}</p>
      <div class="flex justify-center">
        <div class="grid grid-cols-2 p-4">
          ${data.items
            .map(
              (item) => `
            <div class="pl-2">
              <description-item content="${item}"></description-item>
            </div>
          `,
            )
            .join('')}
        </div>
      </div>
    </div>
  `;
}

describe('DescriptionList component', () => {
  const sampleData = {
    text: 'Features',
    items: ['Fast', 'Secure', 'Easy to use'],
  };

  it('renders the title', () => {
    const html = renderDescriptionList(sampleData);
    expect(html).toContain('Features');
  });

  it('renders all items', () => {
    const html = renderDescriptionList(sampleData);
    sampleData.items.forEach((item) => {
      expect(html).toContain(item);
    });
  });

  it('creates a DescriptionItem for each item', () => {
    const html = renderDescriptionList(sampleData);
    const count = (html.match(/<description-item/g) || []).length;
    expect(count).toBe(sampleData.items.length);
  });

  it('handles empty list correctly', () => {
    const html = renderDescriptionList({ text: 'Empty', items: [] });
    expect(html).toContain('Empty');
    expect(html).not.toContain('<description-item');
  });
});
