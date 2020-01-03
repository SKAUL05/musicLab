import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[playlistCoverUrl]',
  host:{
    '(click)':'click()',
    '(error)':'error()'
  }
})
export class PlaylistCoverUrlDirective {

  constructor(
    private element: ElementRef
  ) { }

  private defaultImagePath = '../../../assets/images/sample_music.jpeg'

  public click(){
    console.log("****")
  }

  public error(){
    this.element.nativeElement.src = this.defaultImagePath
  }


}
