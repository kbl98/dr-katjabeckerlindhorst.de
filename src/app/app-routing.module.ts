import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import {DataProtectComponent} from './data-protect/data-protect.component'

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent},
  { path: '', component: SlideshowComponent },
  { path: 'data-protect', component: DataProtectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
