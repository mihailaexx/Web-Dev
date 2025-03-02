import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './album'

@Injectable({
  providedIn: 'root'
})

export class AlbumfetchService {

  constructor(private client: HttpClient) { }

  getAlbums() {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number) {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums${id}`);
  }
}
