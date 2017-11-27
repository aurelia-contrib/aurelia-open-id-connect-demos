import { PLATFORM, autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { User, Log } from "oidc-client";
import { OpenIdConnect, OpenIdConnectRoles } from "aurelia-open-id-connect";

@autoinject()
export class App {
    private router: Router;
    private user: User;

    constructor(private openIdConnect: OpenIdConnect) {
        this.openIdConnect.userManager.getUser().then((user) => {
            this.user = user;
            console.log(user);
        });
    }

    configureRouter(config: RouterConfiguration, router: Router) {

        config.title = "OpenID Connect Implicit Flow Demo";

        // Requires server-side support see MapSpaFallbackRoute.
        config.options.pushState = true;
        config.options.root = '/';

        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../counter/counter'),
            nav: true,
            title: 'Counter'
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../fetchdata/fetchdata'),
            nav: true,
            title: 'Fetch data'
        }]);

        this.openIdConnect.configure(config);
        this.router = router;
    }
}
