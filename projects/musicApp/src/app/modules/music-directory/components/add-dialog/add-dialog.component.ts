import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { MusicListService } from '../../services/music-list.service';
import { SongModel } from 'projects/musicApp/src/app/models/song.model';
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.styl']
})
export class AddDialogComponent implements OnInit {
  /******* Constructor */
  constructor(
    private genreService: GenreService,
    private musicService: MusicListService,
    private matDialogRef:MatDialogRef<AddDialogComponent>,
    private _matSnackBar: MatSnackBar
  ) { }
  /************* Properties */
  public genreList = []
  public songData:SongModel = {
    title:"",
    album:"",
    year:null,
    artist:"",
    coverUrl:"",
    genre:"",
    id:""
  }


  /************* Method */
  ngOnInit() {
    this.genreList = this.genreService.getGenreList()
  }

  public onSave(){
    this.musicService.addSong(this.songData)
    this._matSnackBar.open(this.songData['title'], "", {
      duration: 1000,
    })
    this.matDialogRef.close(true);
  }

}
