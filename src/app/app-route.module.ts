// ルーティングモジュール
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 作成コンポーネントをロード
import { DashboardsComponent } from './dashboards/dashboards.component';
import { MusicCompComponent } from './music-comp/music-comp.component';

// コンポーネントとルーティングをマッピング
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardsComponent },
  { path: 'detail/:id', component: MusicCompComponent },
  { path: 'detail/:id/music/:mid', component: MusicCompComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
