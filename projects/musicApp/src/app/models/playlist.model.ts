import { SongModel } from './song.model';

export interface PlaylistModel {
    name : string,
    id : string,
    songList : SongModel[]

}