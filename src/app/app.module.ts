import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenresPageComponent } from './genres-page/genres-page.component';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresPageComponent,
    AddBookPageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
