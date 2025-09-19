import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes'; // якщо створили окремий файл для маршрутів

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // підключаємо маршрути
  ]
}).catch(err => console.error(err));
