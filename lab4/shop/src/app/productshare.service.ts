import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductshareService {
  constructor() { }

  shareProduct(realKaspiLink: string) {
    navigator.clipboard.writeText(realKaspiLink).then(_ => console.log('Copied to clipboard!'));
    window.open('https://web.telegram.org/k/', '_blank');
  }
}
