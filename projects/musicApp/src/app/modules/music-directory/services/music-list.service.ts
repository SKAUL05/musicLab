import { Injectable } from '@angular/core';
import _ from 'lodash';
import { SongModel } from '../../../models/song.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicListService {
  /***************************** Constructor **************************/
  constructor() { }
  /***************************** Properties **************************/
  private songList: SongModel[] = [
    {
    title : "Hud Hud",
    album: "Dabangg 3",
    year: 2019,
    artist: "Shabab Sabri, Divya Kumar, Sajid",
    id: "1",
    coverUrl: "https://c.saavncdn.com/019/Dabangg-3-Hindi-2019-20191119135116-500x500.jpg",
    genre: "Bollywood"
  },
  {
    title : "O Saki Saki",
    album: "Batla House",
    year: 2019,
    artist: "Tulsi Kumar, Neha Kakkar, B Praak",
    id: "2",
    coverUrl: "https://c.saavncdn.com/810/O-Saki-Saki-From-Batla-House--Hindi-2019-20190715121320-500x500.jpg",
    genre: "Bollywood"

  },
  {
    title : "Muqabla",
    album: "Street Dancer 3D",
    year: 2019,
    artist: "Parampara Thakur, Yash Narvekar",
    id: "3",
    coverUrl: "https://c.saavncdn.com/597/Muqabla-From-Street-Dancer-3D-Hindi-2019-20191226110928-500x500.jpg",
    genre: "Bollywood"

  },
  {
    title : "Oh Ho Ho Ho",
    album: "Ishq Tera Tadpave",
    year: 2018,
    artist: "Sukhbir",
    id: "4",
    coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg",
    genre: "Punjabi"

  },
  {
    title : "Oh Ho Ho Ho",
    album: "Ishq Tera Tadpave",
    year: 2018,
    artist: "Sukhbir",
    id: "5",
    coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg",
    genre: "Punjabi"

  },
  {
    title : "Oh Ho Ho Ho",
    album: "Ishq Tera Tadpave",
    year: 2018,
    artist: "Sukhbir",
    id: "6",
    coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg",
    genre: "Punjabi"

  },
  {
    title : "Oh Ho Ho Ho",
    album: "Ishq Tera Tadpave",
    year: 2018,
    artist: "Sukhbir",
    id: "7",
    coverUrl: "https://c.saavncdn.com/447/Ishq-Tera-Tadpave-Oh-Ho-Ho-Ho--Punjabi-2018-20180515080525-500x500.jpg",
    genre: "Punjabi"

  }

]
  private genreChangeSubject = new Subject<string>()
  /***************************** Methods **************************/
  
  public getSongsList() {
    return _.cloneDeep(this.songList)
  }

  public getGenreSongsList(genre) {
    let songs = _.cloneDeep(this.songList)
    if (genre == "All") {
      return songs
    }

    let returnList = []
    for (let a_song in songs) {
      if (songs[a_song]["genre"] == genre){
        returnList.push(songs[a_song])
      }
    }
    return returnList
  }

  checkGenreChanged(){
    return this.genreChangeSubject.asObservable();
  }
  emitNewGenre(genre){
    this.genreChangeSubject.next(genre);
  }

  addSong(songData:SongModel){
    songData['id'] = (this.songList.length + 1).toString()
    this.songList.push(songData)
  }

  deleteSong(id,songs){
    console.log(id)
    console.log(songs)
    this.songList.splice(id-1,1)
    for (let a_song in songs){
      if (songs[a_song]['id'] == id) {
          songs.splice(a_song,1)
      }
    }
    return songs
  }

}
