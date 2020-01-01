import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module'

import { MusicDirectoryRoutingModule } from './music-directory-routing.module';
import { MusicDirectoryContainerComponent } from './components/music-directory-container/music-directory-container.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { GenerateDashPipe } from '../../shared/pipes/generate-dash.pipe';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [MusicDirectoryContainerComponent, LeftSideBarComponent, MusicListComponent,GenerateDashPipe],
  imports: [
    CommonModule,
    MusicDirectoryRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MusicDirectoryModule { }
