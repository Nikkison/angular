import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// cliツールから作成したコンポーネントは自動でここに追加される
import { AppComponent } from './app.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { MusicCompComponent } from './music-comp/music-comp.component';

// サービスなどコメント等でわかりやすくインポートする必要がある
import { AlbumService } from './service/album.service';

// ルーティングモジュール
import { AppRoutingModule } from './app-route.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardsComponent,
    MusicCompComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
//    AlbumService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
