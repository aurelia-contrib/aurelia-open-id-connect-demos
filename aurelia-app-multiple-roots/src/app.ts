import { Aurelia, autoinject } from "aurelia-framework";
import { NavigationInstruction, Next, PipelineStep, Router, RouterConfiguration } from "aurelia-router";
import { OpenIdConnect, OpenIdConnectRoles } from "aurelia-open-id-connect";

import { User } from "oidc-client";

@autoinject
export class App {

  private router: Router;
  private user: User;

  constructor(private openIdConnect: OpenIdConnect, private aurelia: Aurelia) {
    this.openIdConnect.observeUser((user: User) => this.user = user);
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
        nav: true
      },
      {
        moduleId: "login",
        name: "login",
        route: ["login"],
        title: "login",
        nav: false
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
    routerConfiguration.addPreActivateStep(new CustomRootPipelineStep(this.aurelia));

    this.router = router;
  }
}

class CustomRootPipelineStep implements PipelineStep {
  constructor(private aurelia: Aurelia) {
  }

  async run(instruction: NavigationInstruction, next: Next) {
    if (instruction.config.name === "login") {
      await this.aurelia.setRoot("unauthenticated");
    }
    return await next();
  }
}
