import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module'

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProfileEditorComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProfileModule { 
  
}
