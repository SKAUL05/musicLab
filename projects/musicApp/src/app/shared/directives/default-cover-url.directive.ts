import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[defaultCoverUrl]',
  host:{
    '(click)':'onClick()',
    '(error)': 'onError()'
  }
})
export class DefaultCoverUrlDirective {

  constructor(
    private element:ElementRef
  ) { }

  private defaultImagePath = '../../../assets/images/sample_music.jpeg'
  public onClick(){
    console.log("Click is Pressed")
  }
  public onError(){
    this.element.nativeElement.src = this.defaultImagePath
  }
}
