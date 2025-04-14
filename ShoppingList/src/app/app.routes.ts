import { Routes } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'ShoppingList', component: ShoppingListComponent},
    { path: '', redirectTo: '/ShoppingList', pathMatch: 'full' }, // redirect to `ShoppingListComponent`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
