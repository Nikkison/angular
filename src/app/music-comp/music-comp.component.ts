// rxjs:reactiveな処理を実現するライブラリ
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
// Params: パラメータ管理オブジェクト（ここにおいては:idとか・angularにおいて汎用的）
// Router: ルーティング変更オブジェクト
// ActivatedRoute: 現ルートを取得・管理するオブジェクト
import { Params, Router, ActivatedRoute } from '@angular/router';

import { Album } from './../class/album';
import { Music } from './../class/music';
import { AlbumService } from './../service/album.service';

@Component({
  selector: 'app-music-comp',
  templateUrl: './music-comp.component.html',
  styleUrls: ['./music-comp.component.css'],
  providers: [
    AlbumService
  ]
})
export class MusicCompComponent implements OnInit {

  // レンダリングオブジェクト
  selectedAlbum: Album;
  musics: Music[];
  selectedMusic: Music;

  // クラス初期化
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: AlbumService
  ) { }

  // constructorのあとに実行される
  ngOnInit() {
    // localhost:4200/detail/[0-9]+
    this._route.params
      // switchMapはpromiseを受け取るとresolveされたタイミングで
      .switchMap((params: Params) => this._service.getAlbum(+params['id']))
      .subscribe((album: Album) => {
        this.selectedAlbum = album;
        this._service.getMusics(album.id)
          .then((musics: Music[]) => this.musics = musics);
      });
  }

  // コンポネント内で実行される関数
  onSelect(selectedMusic: Music) {
    this.selectedMusic = selectedMusic;
  }
}
