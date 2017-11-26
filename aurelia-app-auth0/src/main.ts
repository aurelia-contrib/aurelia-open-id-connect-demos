import { Aurelia } from 'aurelia-framework'
import { OpenIdConnectConfiguration } from "aurelia-open-id-connect";
import environment from './environment';
import oidcConfig from "./open-id-connect-configuration";

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources');

    // Simplified configuration as of v0.19.0.
    // aurelia.use.plugin("aurelia-open-id-connect", () => oidcConfig);

    // Legacy configuration from before v0.19.0.
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
