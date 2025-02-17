import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Productproperties } from '../productproperties';

@Component({
  selector: 'app-productsgrid',
  imports: [CommonModule, ProductComponent],
  templateUrl: './productsgrid.component.html',
  styleUrl: './productsgrid.component.css'
})
export class ProductsgridComponent {
  readonly defaulTitle = 'Gray cat :)';
  readonly defaultPhoto = 'https://pbs.twimg.com/media/GJ2vmapXsAEFXdV.jpg';
  products : Productproperties[] = [
    {
      id: 1,
      name: 'iPhone 16',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      description: 'The best phone in the world',
      price: 420139,
      rating: 4.7,
      ratingCount: 457,
      realKaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/',
    },
    {
      id: 2,
      name: 'Google Pixel 9 Pro',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/p51/p8d/13206283.png?format=gallery-medium',
      description: 'The best phone in the world',
      price: 650645,
      rating: 4.8,
      ratingCount: 246,
      realKaspiLink: 'https://kaspi.kz/shop/p/google-pixel-9-pro-16-gb-128-gb-seryi-131427248/',
    },
    {
      id: 3,
      name: 'Смартфон Huawei Mate XT Ultimate 16 ГБ/1024 ГБ красный',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p2a/17575214.jpeg?format=gallery-medium',
      description: 'The best phone in the world',
      price: 999999,
      rating: 5,
      ratingCount: 1,
      realKaspiLink: 'https://kaspi.kz/shop/p/huawei-mate-xt-ultimate-16-gb-1024-gb-krasnyi-132696625/',
    },
    {
      id: 4,
      name: 'Ноутбук Apple MacBook Pro 14 2024 / 36 Гб / SSD 1000 Гб / macOS / MX2K3',
      photo: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/p1b/15673227.png?format=gallery-medium',
      description: 'The best laptop in the world',
      price: 2100000,
      rating: 0,
      ratingCount: 0,
      realKaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-36-gb-ssd-1000-gb-macos-mx2k3-132140637/?c=750000000',
    },
    {
      id: 5,
      name: `${this.defaulTitle}`,
      photo: `${this.defaultPhoto}`,
      description: '',
      price: 0,
      rating: 0,
      ratingCount: 0,
      realKaspiLink: '',
    },
    {
      id: 6,
      name: `${this.defaulTitle}`,
      photo: `${this.defaultPhoto}`,
      description: '',
      price: 0,
      rating: 0,
      ratingCount: 0,
      realKaspiLink: '',
    },
    {
      id: 7,
      name: `${this.defaulTitle}`,
      photo: `${this.defaultPhoto}`,
      description: '',
      price: 0,
      rating: 0,
      ratingCount: 0,
      realKaspiLink: '',
    },
    {
      id: 8,
      name: `${this.defaulTitle}`,
      photo: `${this.defaultPhoto}`,
      description: '',
      price: 0,
      rating: 0,
      ratingCount: 0,
      realKaspiLink: '',
    },
    {
      id: 9,
      name: `${this.defaulTitle}`,
      photo: `${this.defaultPhoto}`,
      description: '',
      price: 0,
      rating: 0,
      ratingCount: 0,
      realKaspiLink: '',
    },
    {
      id: 10,
      name: `${this.defaulTitle}`,
      photo: `${this.defaultPhoto}`,
      description: '',
      price: 0,
      rating: 0,
      ratingCount: 0,
      realKaspiLink: '',
    }
  ];
}
