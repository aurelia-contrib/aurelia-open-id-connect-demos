import { autoinject } from "aurelia-framework";
import { RouterConfiguration, Router } from "aurelia-router";
import { User } from "oidc-client";
import { OpenIdConnect, OpenIdConnectRoles } from "aurelia-open-id-connect";

@autoinject
export class App {

  private router: Router;
  private user: User;

  constructor(private openIdConnect: OpenIdConnect) { }

  public attached() {
    this.openIdConnect.observeUser((user: User) => this.onUserChanged(user));
  }

  private onUserChanged(user: User) {
    this.user = user;
    if (!this.user) {
      this.openIdConnect.login();
    }
  }

  public configureRouter(routerConfiguration: RouterConfiguration, router: Router) {

    // switch from hash (#) to slash (/) navigation
    routerConfiguration.options.pushState = true;
    routerConfiguration.title = "OpenID Connect Implicit Flow Demo";

    // configure routes
    routerConfiguration.map([
      {
        moduleId: "index",
        name: "index",
        route: ["", "index"],
        title: "index",
        nav: true,
        settings: {
          roles: [OpenIdConnectRoles.Authenticated],
        }
      },
      {
        moduleId: "private",
        name: "private",
        route: ["private"],
        title: "private",
        nav: true,
        settings: {
          roles: [OpenIdConnectRoles.Authenticated],
        }
      },
    ]);

    this.openIdConnect.configure(routerConfiguration);
    this.router = router;
  }
}
