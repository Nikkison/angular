import { Component, OnInit } from '@angular/core';

import { Album } from './../class/album';
import { AlbumService } from './..//service/album.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css'],
  providers: [
    AlbumService
  ]
})
export class DashboardsComponent implements OnInit {

  // コンポネントのクラス変数がhtml上で触れるデータ
  albums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums()
      .then((albums) => this.albums = albums);
  }

}
