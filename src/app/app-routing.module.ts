import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PresentationModule} from "./pages/presentation/presentation.module";
import { PresentationComponent } from "./pages/presentation/presentation.component";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot([
      {path: '', component: PresentationComponent}
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
