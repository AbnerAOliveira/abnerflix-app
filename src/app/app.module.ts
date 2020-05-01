import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//PAGES' MODULES
import {PresentationModule} from "./pages/presentation/presentation.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PresentationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
