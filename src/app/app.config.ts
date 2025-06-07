// app.config.ts
import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app.routes';
import { AppState } from './shared/store/Global/App.state';
import { BlogEffects } from './shared/store/Blog/blog.Effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppEffects } from './shared/store/Global/App.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(AppState),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(BlogEffects, AppEffects),
    importProvidersFrom(FormsModule, ReactiveFormsModule)
  ]
};
