import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCoverUrlDirective } from './directives/default-cover-url.directive';



@NgModule({
  declarations: [DefaultCoverUrlDirective],
  imports: [
    CommonModule
  ],
  exports:[DefaultCoverUrlDirective]
})
export class SharedModule { }
