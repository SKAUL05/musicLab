import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicPlaylistComponent } from './components/music-playlist/music-playlist.component';


const routes: Routes = [{
  path:'', component: MusicPlaylistComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
