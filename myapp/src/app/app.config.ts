import { provideAnimations } from '@angular/platform-browser/animations';

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import Nora from '@primeuix/themes/nora';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes) , 
    provideHttpClient()  , 
    provideAnimations() , 
     providePrimeNG({
            theme: {
                preset: Aura , 
            }
        })
  ]
};


