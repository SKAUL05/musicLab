import { Injectable } from '@angular/core';
import { GenreModel } from '../../../models/genre.models';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  /***************************** Constructor **************************/
  constructor() { }
  /***************************** Properties **************************/
  private genreList: GenreModel[] = ['All','Bollywood','Classical','IndiPop','Hollywood','Punjabi']


  /***************************** Methods **************************/
  public getGenreList(): GenreModel[] {
    return _.cloneDeep(this.genreList)
  }

}
