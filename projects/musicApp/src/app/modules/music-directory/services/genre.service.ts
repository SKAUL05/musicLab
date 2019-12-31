import { Injectable } from '@angular/core';
import { GenreModel } from '../../../models/genre.models';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  /***************************** Constructor **************************/
  constructor() { }
  /***************************** Properties **************************/
  private genreList: GenreModel[] = ['All','Bollywood','Classical','IndiPop','Hollywood','Punjabi','']
  /***************************** Methods **************************/
  public getGenreList(): GenreModel[] {
    return this.genreList;
  }
}
