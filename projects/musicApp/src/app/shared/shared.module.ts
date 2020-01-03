import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCoverUrlDirective } from './directives/default-cover-url.directive';
import { PlaylistCoverUrlDirective } from './directives/playlist-cover-url.directive';



@NgModule({
  declarations: [DefaultCoverUrlDirective, PlaylistCoverUrlDirective],
  imports: [
    CommonModule
  ],
  exports:[DefaultCoverUrlDirective,PlaylistCoverUrlDirective]
})
export class SharedModule { }
