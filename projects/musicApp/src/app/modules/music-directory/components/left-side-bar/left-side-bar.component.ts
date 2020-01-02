import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { MusicListService } from '../../services/music-list.service';
import { GenreModel } from 'projects/musicApp/src/app/models/genre.models';
import { SongModel } from 'projects/musicApp/src/app/models/song.model';

@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.styl']
})
export class LeftSideBarComponent implements OnInit {
  /***************************** Constructor **************************/
  constructor(
    private genreService : GenreService,
    private musicService : MusicListService
  ) { }
  /***************************** Properties **************************/

    public genreList: GenreModel[] = [];
    public songsList: SongModel[] = [];

  /***************************** Methods **************************/

  ngOnInit() {
    this.genreList = this.genreService.getGenreList();
    this.songsList  = this.musicService.getSongsList();
  }

  public genreClicked(genre) {
    this.musicService.emitNewGenre(genre);
  }

}
