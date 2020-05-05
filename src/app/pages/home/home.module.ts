import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";

import {TopbarComponent} from "../../components/layouts/topbar/topbar.component";


@NgModule({
  declarations: [HomeComponent, TopbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
