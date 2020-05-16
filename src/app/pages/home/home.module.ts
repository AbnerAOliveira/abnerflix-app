import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";

import {TopbarComponent} from "../../components/layouts/topbar/topbar.component";


@NgModule({
  declarations: [HomeComponent, TopbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
