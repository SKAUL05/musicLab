import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { MusicPlaylistComponent } from './components/music-playlist/music-playlist.component';
import { MaterialModule } from './../material/material.module';
import { PlaylistDialogComponent } from './components/playlist-dialog/playlist-dialog.component';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component'
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MusicPlaylistComponent, PlaylistDialogComponent, PlaylistCardComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PlaylistModule { }
