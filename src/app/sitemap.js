// src/app/sitemap.js

export default function sitemap() {
  const baseUrl = 'https://attadesign.pl';

  // Lista Twoich głównych stron, które chcesz indeksować
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/eng`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Dlaczego-szybkosc-strony-jest-kluczowa`,
      lastModified: new Date(), // Możesz tu ustawić datę publikacji
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/Strona-kancelarii-prawnej`,
      lastModified: new Date(), // Możesz tu ustawić datę publikacji
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // W przyszłości, jeśli będziesz miał bloga w CMS,
  // możesz tu dynamicznie pobrać listę postów i dodać je do mapy.

  return staticPages;
}
