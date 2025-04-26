import { Routes } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateItemPopupComponent } from './components/update-item-popup/update-item-popup.component';

export const routes: Routes = [
    {
      path: 'ShoppingList',
      component: ShoppingListComponent,
      title: 'Shopping List'
    },
    {
      path: 'PopUp',
      component: UpdateItemPopupComponent,
      title: 'Update Item'
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
