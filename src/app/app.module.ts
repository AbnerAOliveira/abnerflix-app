import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';



import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

//PAGES' MODULES
import {PresentationModule} from "./pages/presentation/presentation.module";
import {HomeModule} from "./pages/home/home.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PresentationModule,
    HomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
