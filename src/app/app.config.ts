import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { PublicClientApplication, InteractionType, LogLevel,BrowserCacheLocation } from '@azure/msal-browser';
import { MsalGuard, MsalService, MsalBroadcastService, MsalInterceptor, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuardConfiguration, MsalInterceptorConfiguration,MsalRedirectComponent } from '@azure/msal-angular';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';


const msalInstance = new PublicClientApplication({
  auth: {
    clientId: 'b8cb5b26-ba2c-4116-a573-8e42d5f27add',
    redirectUri: 'http://localhost:4200',
    authority: 'https://login.microsoftonline.com/b199a711-f206-4902-bb68-c0a1620f76c9',
    
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage
  },
  system: {
    loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
            console.log(message)
        },
        logLevel: LogLevel.Verbose,
    }
}
});

const msalGuardConfig: MsalGuardConfiguration = {
  interactionType: InteractionType.Redirect,
  authRequest: {
    scopes: ['user.read']
  }
};

const msalInterceptorConfig: MsalInterceptorConfiguration = {
  interactionType: InteractionType.Redirect,
  protectedResourceMap: new Map([
    ['https://graph.microsoft.com/v1.0/me', ['user.read']]
  ])
};



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),  
    { provide: MSAL_INSTANCE, useValue: msalInstance },
    { provide: MSAL_GUARD_CONFIG, useValue: msalGuardConfig },
    { provide: MSAL_INTERCEPTOR_CONFIG, useValue: msalInterceptorConfig },
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    MsalRedirectComponent
  ]
};
