export enum ProductCategory {
  phone = 'Смартфоны',
  laptop = 'Ноутбуки',
  camera = 'Фото- и видеокамеры',
  headphone = 'Наушники',
}

export interface Productproperty {
  id: number;
  category: ProductCategory,
  name: string;
  photo: string;
  description: string;
  price: number;
  rating: number;
  ratingCount: number;
  realKaspiLink: string;
  likeCount: number;
}
