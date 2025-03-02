import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { CommonModule } from '@angular/common';
import { AlbumfetchService } from '../albumfetch.service'
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-albumlist',
  imports: [CommonModule, RouterLink],
  templateUrl: './albumlist.component.html',
  styleUrl: './albumlist.component.css'
})

export class AlbumlistComponent implements OnInit {
  albums!: Album[];
  loaded: boolean = false;

  constructor(private albumfetchService: AlbumfetchService) {  }

  ngOnInit() {
    this.loaded = false;
    this.albumfetchService.getAlbums().subscribe((albums: Album[])=> {
      this.albums = albums;
      this.loaded = true;
    })
  }
}
