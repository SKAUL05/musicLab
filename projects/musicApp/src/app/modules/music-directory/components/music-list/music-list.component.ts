import { Component, OnInit } from '@angular/core';
import { MusicListService } from '../../services/music-list.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.styl']
})
export class MusicListComponent implements OnInit {

  /***************************** Constructor **************************/

  constructor(
    private musicListService: MusicListService,
    public dialog: MatDialog,
    private genreService: GenreService
  ) { }

  /***************************** Properties **************************/
  public songList = []
  public showCard = false
  public genreList = []
  /***************************** Methods **************************/

  ngOnInit() {
    this.songList = this.musicListService.getSongsList()
    this.setUpdateListener();
    this.genreList = this.genreService.getGenreList()

  }
 
 
  private setUpdateListener(){
    this.musicListService.checkGenreChanged().subscribe((genre)=>{
      this.songList = this.musicListService.getGenreSongsList(genre)
    })
  }

  public openDialog() {
    let matDialogRef:MatDialogRef<AddDialogComponent> = this.dialog.open(AddDialogComponent)
    matDialogRef.afterClosed().subscribe((data)=>{
      if(data){
        this.songList = this.musicListService.getSongsList()
      }
      console.log('dialog closed',data);
    })
  }

  public deleteSong(song){
    console.log(song)
    this.songList = this.musicListService.deleteSong(song['id'],this.songList)
  }
  
  public update(song){
    console.log(song)
    this.songList = this.musicListService.updateSong(song,this.songList)
  }
}
