import { RouterModule, Routes } from '@angular/router';
import {AddBookPageComponent} from './add-book-page/add-book-page.component';
import {GenresPageComponent} from './genres-page/genres-page.component';
import {HomeComponent} from './home/home.component';
import {BookPageComponent} from "./book-page/book-page.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {GenreBooksPageComponent} from "./genre-books-page/genre-books-page.component";

const routes: Routes = [
  { path: 'addBook', component: AddBookPageComponent },
  { path: 'genres', component: GenresPageComponent},
  { path : 'home', component : HomeComponent},
  { path : '', component : HomeComponent},
  { path : 'book', component : BookPageComponent},
  {path:'editBook', component:EditBookComponent},
  { path: 'genreBook', component:GenreBooksPageComponent}
];

export const routing = RouterModule.forRoot(routes);
