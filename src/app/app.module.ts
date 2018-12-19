import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenresPageComponent } from './genres-page/genres-page.component';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BookService} from "./service/book.service";
import { BookPageComponent } from './book-page/book-page.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { GenreBooksPageComponent } from './genre-books-page/genre-books-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresPageComponent,
    AddBookPageComponent,
    BookPageComponent,
    EditBookComponent,
    GenreBooksPageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
