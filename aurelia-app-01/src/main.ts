import { Aurelia } from 'aurelia-framework'
import environment from './environment';
import oidcConfig from "./open-id-connect-configuration";
import { OpenIdConnectConfiguration } from "aurelia-open-id-connect";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use
    .plugin("aurelia-open-id-connect", (config: OpenIdConnectConfiguration) => {
      config.userManagerSettings = oidcConfig.userManagerSettings;
      config.loginRedirectModuleId = oidcConfig.loginRedirectModuleId;
      config.logoutRedirectModuleId = oidcConfig.logoutRedirectModuleId;
    });

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
