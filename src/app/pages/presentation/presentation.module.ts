import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {PresentationComponent} from "./presentation.component";


@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [PresentationComponent]
})
export class PresentationModule {
}
