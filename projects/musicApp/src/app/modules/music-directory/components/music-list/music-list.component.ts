import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.styl']
})
export class MusicListComponent implements OnInit {

  /***************************** Constructor **************************/

  constructor(
    private genreService: GenreService
  ) { }

  /***************************** Properties **************************/
  public songList = []

  /***************************** Methods **************************/

  ngOnInit() {
    this.songList = this.genreService.getSongsList()

  }

}
