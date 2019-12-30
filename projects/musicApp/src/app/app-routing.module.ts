import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {'path':'music',loadChildren: () => import('./modules/music-directory/music-directory.module').then(m => m.MusicDirectoryModule)},
  {'path':'playlist',loadChildren: () => import('./modules/playlist/playlist.module').then(m => m.PlaylistModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
