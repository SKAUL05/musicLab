import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { MusicPlaylistComponent } from './components/music-playlist/music-playlist.component';
import { MaterialModule } from './../material/material.module';
import { PlaylistDialogComponent } from './components/playlist-dialog/playlist-dialog.component'

@NgModule({
  declarations: [MusicPlaylistComponent, PlaylistDialogComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    MaterialModule
  ]
})
export class PlaylistModule { }
