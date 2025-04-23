import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

export const PagesRoutes: Routes = [
  { path:"", redirectTo:"", pathMatch:"full"},
  {
    path:"",
    component:IndexComponent
  },
 
];
