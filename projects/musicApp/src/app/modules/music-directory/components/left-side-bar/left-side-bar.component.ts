import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { GenreModel } from 'projects/musicApp/src/app/models/genre.models';

@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.styl']
})
export class LeftSideBarComponent implements OnInit {
  /***************************** Constructor **************************/
  constructor(
    private genreService : GenreService
  ) { }
  /***************************** Properties **************************/

    public genreList: GenreModel[] = [];
  /***************************** Methods **************************/

  ngOnInit() {
    this.genreList = this.genreService.getGenreList();
  }

}
