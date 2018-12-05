import { RouterModule, Routes } from '@angular/router';
import {AddBookPageComponent} from './add-book-page/add-book-page.component';
import {GenresPageComponent} from './genres-page/genres-page.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'addBook', component: AddBookPageComponent },
  { path: 'genres', component: GenresPageComponent},
  { path : 'home', component : HomeComponent},
  { path : '', component : HomeComponent}
];

export const routing = RouterModule.forRoot(routes);
