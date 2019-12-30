import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicDirectoryContainerComponent } from './components/music-directory-container/music-directory-container.component';


const routes: Routes = [
  {path:'', component: MusicDirectoryContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicDirectoryRoutingModule { }
