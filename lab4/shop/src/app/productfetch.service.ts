import {Injectable} from '@angular/core';
import {ProductCategory, Productproperty} from './productproperty';

@Injectable({
  providedIn: 'root'
})

export class ProductfetchService {
  constructor() { }

  products : Record<string, Productproperty[]> = {
    [ProductCategory.phone]: [
      {
        id: 1,
        category: ProductCategory.phone,
        name: `iPhone 16`,
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        description: 'The best phone in the world',
        price: 420139,
        rating: 4.7,
        ratingCount: 457,
        realKaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/',
        likeCount: 0,
      },
      {
        id: 2,
        category: ProductCategory.phone,
        name: `Google Pixel 9 Pro`,
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/p51/p8d/13206283.png?format=gallery-medium',
        description: 'The best phone in the world',
        price: 650645,
        rating: 4.8,
        ratingCount: 246,
        realKaspiLink: 'https://kaspi.kz/shop/p/google-pixel-9-pro-16-gb-128-gb-seryi-131427248/',
        likeCount: 0,
      },
      {
        id: 3,
        category: ProductCategory.phone,
        name: `Huawei Mate XT Ultimate 16 ГБ/1024 ГБ красный`,
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p2a/17575214.jpeg?format=gallery-medium',
        description: 'The best phone in the world',
        price: 999999,
        rating: 5,
        ratingCount: 1,
        realKaspiLink: 'https://kaspi.kz/shop/p/huawei-mate-xt-ultimate-16-gb-1024-gb-krasnyi-132696625/',
        likeCount: 0,
      },
      {
        id: 4,
        category: ProductCategory.phone,
        name: `Xiaomi 14 Ultra 16 ГБ/512 ГБ черный`,
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/h86/h08/85506637168670.jpg?format=gallery-medium',
        description: 'The best phone in the world',
        price: 570000,
        rating: 5,
        ratingCount: 69,
        realKaspiLink: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-117684874/',
        likeCount: 0,
      },
      {
        id: 5,
        category: ProductCategory.phone,
        name: `ASUS ROG Phone 9 Pro 24 ГБ/1024 ГБ черный`,
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p6b/12414492.jpg?format=gallery-medium',
        description: 'The best phone in the world',
        price: 948000,
        rating: 4.9,
        ratingCount: 2,
        realKaspiLink: 'https://kaspi.kz/shop/p/asus-rog-phone-9-pro-24-gb-1024-gb-chernyi-131200743/',
        likeCount: 0,
      },
    ],
    [ProductCategory.laptop]: [
      {
        id: 6,
        category: ProductCategory.laptop,
        name: `Apple MacBook Pro 14 2024 / 36 Гб / SSD 1000 Гб / macOS / MX2K3`,
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/p1b/15673227.png?format=gallery-medium',
        description: 'The best laptop in the world',
        price: 2100000,
        rating: 0,
        ratingCount: 0,
        realKaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-36-gb-ssd-1000-gb-macos-mx2k3-132140637/?c=750000000',
        likeCount: 0,
      },
      {
        id: 7,
        category: ProductCategory.laptop,
        name: `ASUS ROG Zephyrus G16 16" / 32 Гб / SSD 1000 Гб / Win 11 Home / GU605MY-QR151W / 90NR0IQ6-M007H0`,
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hbc/87253045870622.jpg?format=gallery-medium',
        description: 'The best laptop in the world',
        price: 2588000,
        rating: 0,
        ratingCount: 0,
        realKaspiLink: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-16-32-gb-ssd-1000-gb-win-11-home-gu605my-qr151w-90nr0iq6-m007h0-124112068/',
        likeCount: 0,
      },
      {
        id: 8,
        category: ProductCategory.laptop,
        name: `HP OMEN 17.3" / 32 Гб / SSD 2000 Гб / DOS / 17-ck2001ci / 7Z7P4EA`,
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/hed/h4a/85198226620446.jpg?format=gallery-medium',
        description: 'The best laptop in the world',
        price: 2777777,
        rating: 5,
        ratingCount: 1,
        realKaspiLink: 'https://kaspi.kz/shop/p/hp-omen-17-3-32-gb-ssd-2000-gb-dos-17-ck2001ci-7z7p4ea-111970661/',
        likeCount: 0,
      },
      {
        id: 9,
        category: ProductCategory.laptop,
        name: `Lenovo Legion 9 16" / 32 Гб / SSD 2000 Гб / Без ОС / 16IRX8 / 83AG001JRK`,
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h56/85156619878430.png?format=gallery-medium',
        description: 'The best laptop in the world',
        price: 2700000,
        rating: 0,
        ratingCount: 0,
        realKaspiLink: 'https://kaspi.kz/shop/p/lenovo-legion-9-16-32-gb-ssd-2000-gb-bez-os-16irx8-83ag001jrk-116580486/',
        likeCount: 0,
      },
      {
        id: 10,
        category: ProductCategory.laptop,
        name: `DELL XPS 15 9520 15.6" / 32 Гб / SSD 1000 Гб / Win 11 Pro / 210-BDVF-15`,
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/h95/85372238069790.jpg?format=gallery-medium',
        description: 'The best laptop in the world',
        price: 2829000,
        rating: 0,
        ratingCount: 0,
        realKaspiLink: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-32-gb-ssd-1000-gb-win-11-pro-210-bdvf-15-117247427/',
        likeCount: 0,
      }
    ],
    [ProductCategory.camera]: [
      {
        id: 11,
        category: ProductCategory.camera,
        name: 'Sony ZV-E10 KIT 16-50mm чёрный',
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/p38/pbb/11569232.jpg?format=gallery-medium',
        description: 'The best camera in the world',
        price: 370000,
        rating: 5,
        ratingCount: 90,
        realKaspiLink: 'https://kaspi.kz/shop/p/sony-zv-e10-kit-16-50mm-chjornyi-102510202/',
        likeCount: 0,
      },
      {
        id: 12,
        category: ProductCategory.camera,
        name: 'Canon PowerShot G7 X Mark III черный',
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-medium',
        description: 'The best camera in the world',
        price: 728000,
        rating: 5,
        ratingCount: 64,
        realKaspiLink: 'https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-2240141/',
        likeCount: 0,
      },
      {
        id: 13,
        category: ProductCategory.camera,
        name: 'Canon EOS R6 Mark II kit RF 24-105mm f/4L',
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/h84/h3c/67854058815518.jpg?format=gallery-medium',
        description: 'The best camera in the world',
        price: 1708000,
        rating: 5,
        ratingCount: 10,
        realKaspiLink: 'https://kaspi.kz/shop/p/canon-eos-r6-mark-ii-kit-rf-24-105mm-f-4l-108430999/',
        likeCount: 0,
      },
      {
        id: 14,
        category: ProductCategory.camera,
        name: 'Sony Alpha ILCE7M4KB',
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/hd9/64301559480350.jpg?format=gallery-medium',
        description: 'The best camera in the world',
        price: 1300000,
        rating: 5,
        ratingCount: 8,
        realKaspiLink: 'https://kaspi.kz/shop/p/sony-alpha-ilce7m4kb-103728127/',
        likeCount: 0,
      },
      {
        id: 15,
        category: ProductCategory.camera,
        name: 'Nikon Z6 II kit Nikon 24-70mm f/4S Nikkor Z',
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h18/84871267549214.jpg?format=gallery-medium',
        description: 'The best camera in the world',
        price: 1246000,
        rating: 5,
        ratingCount: 1,
        realKaspiLink: 'https://kaspi.kz/shop/p/nikon-z6-ii-kit-nikon-24-70mm-f-4s-nikkor-z-115843825/',
        likeCount: 0,
      },
    ],
    [ProductCategory.headphone]: [
      {
        id: 16,
        category: ProductCategory.headphone,
        name: 'Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        description: 'The best headphones in the world',
        price: 112000,
        rating: 5,
        ratingCount: 1369,
        realKaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/',
        likeCount: 0,
      },
      {
        id: 17,
        category: ProductCategory.camera,
        name: 'Apple EarPods Lightning белый',
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-medium',
        description: 'The best headphones in the world',
        price: 5000,
        rating: 4.3,
        ratingCount: 1285,
        realKaspiLink: 'https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000',
        likeCount: 0,
      },
      {
        id: 18,
        category: ProductCategory.camera,
        name: 'Apple AirPods Max черный',
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=gallery-medium',
        description: 'The best headphones in the world',
        price: 280000,
        rating: 4.8,
        ratingCount: 146,
        realKaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000',
        likeCount: 0,
      },
      {
        id: 19,
        category: ProductCategory.camera,
        name: 'Sony WH-1000XM4 черный',
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
        description: 'The best headphones in the world',
        price: 115000,
        rating: 4.9,
        ratingCount: 394,
        realKaspiLink: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471997/?c=750000000',
        likeCount: 0,
      },
      {
        id: 20,
        category: ProductCategory.camera,
        name: 'Audio-Technica ATH-M70X черный',
        photo: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h87/63758603059230.jpg?format=gallery-medium',
        description: 'The best headphones in the world',
        price: 189990,
        rating: 4,
        ratingCount: 2,
        realKaspiLink: 'https://kaspi.kz/shop/p/audio-technica-ath-m70x-chernyi-4803739/?c=750000000',
        likeCount: 0,
      },
    ],
  }

  // @ts-ignore
  getProductById(id: number) : Productproperty {
    for (const category of Object.values(this.products)) {
      const product = category.find(product => product.id === id);
      if (product) return product;
    }
  }
  getProductsByCategory(category: ProductCategory) : Productproperty[] {
    return this.products[category];
  }
  getAllProducts() : Productproperty[] {
    let products: Productproperty[] = [];
    for (const category of Object.values(this.products)) {
      products = products.concat(category);
    }
    return products;
  }
  likeProduct(id: number) {
    let prod = this.getProductById(id);
    console.log(prod.likeCount) // check
    prod.likeCount++;
    console.log(prod.likeCount) // check
  }
}
