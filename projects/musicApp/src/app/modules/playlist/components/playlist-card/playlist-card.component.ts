import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { PlaylistModel } from 'projects/musicApp/src/app/models/playlist.model';

@Component({
  selector: 'playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.styl']
})
export class PlaylistCardComponent implements OnInit {



  constructor(
    private playlistService: PlaylistService,
  ) { }

    public playlist  = []

  ngOnInit() {
    this.playlist = this.playlistService.getPlayList()
    console.log(this.playlist)
  }

}
