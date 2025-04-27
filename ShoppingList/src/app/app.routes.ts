import { Routes } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
      path: 'ShoppingList',
      component: ShoppingListComponent,
      title: 'Shopping List'
    },
    {
      path: '',
      redirectTo: '/ShoppingList',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: PageNotFoundComponent,
      title: '404 – Seite nicht gefunden'
    }
  ];
