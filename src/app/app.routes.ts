import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { ItemsList } from './items-list/items-list';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
      { path: '', component: ItemsList }
    ]
    }
];
