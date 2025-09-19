import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { Layout } from './app/layout/layout';


const routes: Routes = [
  { path: '', component: Layout }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
