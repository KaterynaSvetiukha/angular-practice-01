import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, LayoutComponent], // підключаємо маршрути та LayoutComponent
  template: '<router-outlet></router-outlet>' // тут відображаються маршрути
})
export class AppComponent {}
