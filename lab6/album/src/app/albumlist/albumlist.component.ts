import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumfetchService } from '../albumfetch.service'
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-albumlist',
  imports: [NgForOf],
  templateUrl: './albumlist.component.html',
  styleUrl: './albumlist.component.css'
})

export class AlbumlistComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumfetchService: AlbumfetchService) { }

  ngOnInit() {
    this.albumfetchService.getAlbums().subscribe((albums: Album[])=> {
      this.albums = albums;
    })
  }
}
