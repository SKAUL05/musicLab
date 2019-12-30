import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module'

import { MusicDirectoryRoutingModule } from './music-directory-routing.module';
import { MusicDirectoryContainerComponent } from './components/music-directory-container/music-directory-container.component';


@NgModule({
  declarations: [MusicDirectoryContainerComponent],
  imports: [
    CommonModule,
    MusicDirectoryRoutingModule,
    MaterialModule
  ]
})
export class MusicDirectoryModule { }
