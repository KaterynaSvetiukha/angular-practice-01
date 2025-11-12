import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BaseUrlInterceptor } from './app/interceptors/base-url.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // підключаємо маршрути
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor , multi: true},
  ],
}).catch((err) => console.error(err));
