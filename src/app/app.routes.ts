import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsListComponent } from './products-list/products-list.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'products',
        component: ProductsListComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
