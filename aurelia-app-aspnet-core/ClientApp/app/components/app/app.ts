import { autoinject, PLATFORM } from "aurelia-framework";
import { RouterConfiguration, Router } from "aurelia-router";
import { User } from "oidc-client";
import { OpenIdConnect, OpenIdConnectRoles } from "aurelia-open-id-connect";

@autoinject
export class App {

  private router: Router;
  private user: User;

  constructor(private openIdConnect: OpenIdConnect) {
    this.openIdConnect.observeUser((user: User) => this.user = user);
  }

  public configureRouter(routerConfiguration: RouterConfiguration, router: Router) {

    // switch from hash (#) to slash (/) navigation
    routerConfiguration.options.pushState = true;
    routerConfiguration.title = "OpenID Connect Implicit Flow Demo";

    routerConfiguration.map([{
      // change the route to match the configuration
      route: ['', 'home', 'index'],
      name: 'home',
      settings: { icon: 'home' },
      moduleId: PLATFORM.moduleName('../home/home'),
      nav: true,
      title: 'Home'
    }, {
      // change the route to match the configuration
      route: ['counter', 'private'],
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

    this.openIdConnect.configure(routerConfiguration);
    this.router = router;
  }
}
