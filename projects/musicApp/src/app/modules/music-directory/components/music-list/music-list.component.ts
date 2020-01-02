import { Component, OnInit } from '@angular/core';
import { MusicListService } from '../../services/music-list.service';

@Component({
  selector: 'music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.styl']
})
export class MusicListComponent implements OnInit {

  /***************************** Constructor **************************/

  constructor(
    private musicListService: MusicListService
  ) { }

  /***************************** Properties **************************/
  public songList = []
  /***************************** Methods **************************/

  ngOnInit() {
    this.songList = this.musicListService.getSongsList()
    this.setUpdateListener();
  }
  private setUpdateListener(){
    this.musicListService.checkGenreChanged().subscribe((genre)=>{
      this.songList = this.musicListService.getGenreSongsList(genre)
    })
  }

}
