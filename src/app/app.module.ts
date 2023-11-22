import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module'
import {TagModule} from "./components/tag/tag.module";
import {ContactModule} from "./pages/contact/contact.module";
import { AboutMeModule } from './pages/about-me/about-me.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
