import { Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';

export const routes: Routes = [
    // {
    //     path:"", redirectTo:"", pathMatch:"full"
    // },
    {
        path:"",
        component:BaseComponent,
        loadChildren: () =>
            import('./pages/pages.routes').then((m) => m.PagesRoutes),
    }
];
