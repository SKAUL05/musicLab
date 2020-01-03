import { Injectable } from '@angular/core';
import { PlaylistModel } from '../../../models/playlist.model';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  /************************* Constructor */
  constructor() { }
  /************************* Properties */

  private playList: PlaylistModel[] = [
    {name:"Playlist1",id:"1",songList:[ {title : "Hud Hud",album: "Dabangg 3",year: 2019,artist: "Shabab Sabri, Divya Kumar, Sajid",id: "1",coverUrl: "https://c.saavncdn.com/019/Dabangg-3-Hindi-2019-20191119135116-500x500.jpg",genre: "Bollywood"} ] },
    {name:"Playlist2",id:"2",songList:[ {title : "Hud Hud",album: "Dabangg 3",year: 2019,artist: "Shabab Sabri, Divya Kumar, Sajid",id: "1",coverUrl: null,genre: "Bollywood"} ] },
  ]

  /************************* Method */

  getPlayList(){
    let playlist = _.cloneDeep(this.playList)
    return playlist
  }


}
