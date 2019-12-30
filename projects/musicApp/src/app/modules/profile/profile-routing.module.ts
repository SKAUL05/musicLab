import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileEditorComponent} from './components/profile-editor/profile-editor.component'

const routes: Routes = [
  {path:'', component: ProfileEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
