import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Album } from './../class/album';
import { Music } from './../class/music';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlbumService {

  constructor( private http: Http ) {}

  getAlbums(): Promise<Album[]> {
    return this.http
      .get('http://localhost:4201/api/album')
      .toPromise()
      .then(res => res.json().data as Album[])
      .catch(this.handleError);
  }

  // 2000ms遅延させる
  getSlowly(): Promise<Album[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.getAlbums()), 2000);
    });
  }

  getAlbum(id: number): Promise<Album> {
    return this.getAlbums().then((albums) => albums.find((album) => album.id === id));
  }

  getMusics(albumId: number): Promise<Music[]> {
    return this.http
      .get('http://localhost:4201/api/music')
      .toPromise()
      .then(res => res.json().data as Music[])
      .then((musics) => musics.filter((music) => music.albumId === albumId))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
