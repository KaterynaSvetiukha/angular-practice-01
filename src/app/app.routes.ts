import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { ItemsList } from './items-list/items-list';
import { ItemDetails } from './components/item-details/item-details';
import { ItemForm } from './components/item-form/item-form';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'projects', component: ItemsList },
      { path: 'projects/:id', component: ItemDetails },
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'item-form', canActivate: [authGuard], component: ItemForm },
      { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
      { path: 'register', loadComponent: () => import('./pages/register/register').then(m => m.Register) },
    ],
  },
];
