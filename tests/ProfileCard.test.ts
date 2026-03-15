import { describe, it, expect } from 'vitest';

function renderProfileCard(data: {
  name: string;
  surname: string;
  secondSurname: string;
  image: string;
}) {
  return `
    <div>
      <img src="${data.image}" alt="" />
      <h1>
        <span>${data.name}</span>
        <span>${data.surname}</span>
        <span>${data.secondSurname}</span>
      </h1>
    </div>
  `;
}

describe('ProfileCard component', () => {
  const sampleData = {
    name: 'Jairo',
    surname: 'Cereceda',
    secondSurname: 'Berciano',
    image: '/perfil.jpg',
  };

  it('renders the full name', () => {
    const html = renderProfileCard(sampleData);
    expect(html).toContain('Jairo');
    expect(html).toContain('Cereceda');
    expect(html).toContain('Berciano');
  });

  it('renders the image with the correct src', () => {
    const html = renderProfileCard(sampleData);
    expect(html).toContain('src="/perfil.jpg"');
  });
});
