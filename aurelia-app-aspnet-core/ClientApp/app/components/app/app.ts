import { PLATFORM, autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { User } from "oidc-client";
import { OpenIdConnect, OpenIdConnectRoles, OpenIdConnectUserObserver } from "aurelia-open-id-connect";

@autoinject()
export class App implements OpenIdConnectUserObserver {
    private router: Router;
    private user: User;

    constructor(private openIdConnect: OpenIdConnect) {
        this.openIdConnect.observeUser((user: User) => this.user = user);
    }

    userChanged(user: User): void {
        this.user = user;
    }

    configureRouter(config: RouterConfiguration, router: Router) {

        config.title = "OpenID Connect Implicit Flow Demo";

        // Requires server-side support see MapSpaFallbackRoute.
        config.options.pushState = true;
        config.options.root = '/';

        config.map([{
            route: ['', 'home'],
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
