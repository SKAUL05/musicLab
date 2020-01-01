import { Injectable } from '@angular/core';
import { GenreModel } from '../../../models/genre.models';
import { SongModel } from '../../../models/song.model';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  /***************************** Constructor **************************/
  constructor() { }
  /***************************** Properties **************************/
  private genreList: GenreModel[] = ['All','Bollywood','Classical','IndiPop','Hollywood','Punjabi']

  private songList: SongModel[] = [
    {
    title : "Hud Hud",
    album: "Dabangg 3",
    year: 2019,
    artist: "Shabab Sabri, Divya Kumar, Sajid",
    id: "1",
    coverUrl: "https://c.saavncdn.com/019/Dabangg-3-Hindi-2019-20191119135116-500x500.jpg"
  },
  {
    title : "O Saki Saki",
    album: "Batla House",
    year: 2019,
    artist: "Tulsi Kumar, Neha Kakkar, B Praak",
    id: "2",
    coverUrl: "https://c.saavncdn.com/810/O-Saki-Saki-From-Batla-House--Hindi-2019-20190715121320-500x500.jpg"
  },
  {
    title : "Muqabla",
    album: "Street Dancer 3D",
    year: 2019,
    artist: "Parampara Thakur, Yash Narvekar",
    id: "3",
    coverUrl: "https://c.saavncdn.com/597/Muqabla-From-Street-Dancer-3D-Hindi-2019-20191226110928-500x500.jpg"
  },
  {
    title : "Oh Ho Ho Ho",
    album: "Ishq Tera Tadpave",
    year: 2018,
    artist: "Sukhbir",
    id: "4",
    coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg"
  },
  {
    title : "Oh Ho Ho Ho",
    album: "Ishq Tera Tadpave",
    year: 2018,
    artist: "Sukhbir",
    id: "5",
    coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg"
  },
  {
    title : "Oh Ho Ho Ho",
    album: "Ishq Tera Tadpave",
    year: 2018,
    artist: "Sukhbir",
    id: "6",
    coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg"
  },
  {
    title : "Oh Ho Ho Ho",
    album: "Ishq Tera Tadpave",
    year: 2018,
    artist: "Sukhbir",
    id: "7",
    coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg"
  }

]

  /***************************** Methods **************************/
  public getGenreList(): GenreModel[] {
    return _.cloneDeep(this.genreList)
  }

  public getSongsList() {
    return _.cloneDeep(this.songList)
  }

}
