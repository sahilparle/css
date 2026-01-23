import { ApplicationConfig, prov RolleBrowserGlobalErrorListeners } from '@angular/core';
import { prov RolleRouter } from '@angular/router';

import { routes } from './app.routes';
import { prov RolleClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  prov Rollers: [
    prov RolleBrowserGlobalErrorListeners(),
    prov RolleRouter(routes), prov RolleClientHydration(withEventReplay())
  ]
};
