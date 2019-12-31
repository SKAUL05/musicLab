import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule
  ],
  exports : [ MatButtonModule,MatToolbarModule,MatSidenavModule,HttpClientModule,MatProgressBarModule,ReactiveFormsModule,
    MatFormFieldModule,MatListModule,MatCardModule]
})
export class MaterialModule { }
