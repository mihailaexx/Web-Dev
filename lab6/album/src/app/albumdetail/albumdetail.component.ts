import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { AlbumfetchService } from '../albumfetch.service';

@Component({
  selector: 'app-albumdetail',
  imports: [
    RouterLink
  ],
  templateUrl: './albumdetail.component.html',
  styleUrl: './albumdetail.component.css'
})
export class AlbumdetailComponent implements OnInit {
  album: any;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private albumfetchService: AlbumfetchService) {  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const albumId = params['id'];

      this.albumfetchService.getAlbum(albumId).subscribe(album => {
        this.album = album;
        this.loaded = true;
      })
    })
  }
}
