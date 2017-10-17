import { Aurelia } from 'aurelia-framework'
import { OpenIdConnectConfiguration } from "aurelia-open-id-connect";
import environment from './environment';
import myOidcConfig from "./open-id-connect-configuration";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use
    .plugin("aurelia-open-id-connect", (oidcConfig: OpenIdConnectConfiguration) => {
      // I am not sure that I like this. 
      // It might be better to let the user 
      // pass in an instance of OpenIdConnectConfiguration.
      // The problem with using a callback, is that the user might overwrite
      // the entire object reference (oidcConfig = myOidcConfig) and thereby break everything.
      oidcConfig.userManagerSettings = myOidcConfig.userManagerSettings;
      oidcConfig.loginRedirectModuleId = myOidcConfig.loginRedirectModuleId;
      oidcConfig.logoutRedirectModuleId = myOidcConfig.logoutRedirectModuleId;
    });

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
