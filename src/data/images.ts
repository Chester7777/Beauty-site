const base = import.meta.env.BASE_URL;

export const img = (filename: string) => `${base}images/${filename}`;

export const images = {
  hero: img('hero.jpg'),
  about: img('about.jpg'),
  contactBg: img('contact-bg.jpg'),
  heroCard: img('hero-card.jpg'),
} as const;

export const serviceImages = [
  img('service-1.jpg'),
  img('service-2.jpg'),
  img('service-3.jpg'),
  img('service-4.jpg'),
  img('service-5.jpg'),
  img('service-6.jpg'),
] as const;

export const gallerySlides = [
  {
    image: img('gallery-1.jpg'),
    title: 'Стрижки и окрашивание',
    subtitle: 'Авторский подход к каждому образу',
  },
  {
    image: img('gallery-2.jpg'),
    title: 'Маникюр',
    subtitle: 'Изысканный дизайн и безупречный уход',
  },
  {
    image: img('gallery-3.jpg'),
    title: 'Косметология',
    subtitle: 'Сияние и молодость вашей кожи',
  },
  {
    image: img('gallery-4.jpg'),
    title: 'Макияж',
    subtitle: 'Вечерний и свадебный образ',
  },
  {
    image: img('gallery-5.jpg'),
    title: 'SPA-ритуалы',
    subtitle: 'Релакс и восстановление',
  },
  {
    image: img('gallery-6.jpg'),
    title: 'Интерьер салона',
    subtitle: 'Атмосфера роскоши и уюта',
  },
  {
    image: img('gallery-7.jpg'),
    title: 'Уход за кожей',
    subtitle: 'Премиальная косметика',
  },
] as const;
