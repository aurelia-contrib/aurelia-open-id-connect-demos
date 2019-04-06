import { Router, RouterConfiguration } from "aurelia-router";

export class Unauthenticated {
  public configureRouter(routerConfiguration: RouterConfiguration, router: Router) {
    // switch from hash (#) to slash (/) navigation
    routerConfiguration.options.pushState = true;
    routerConfiguration.title = "OpenID Connect Implicit Flow Demo";

    // configure routes
    routerConfiguration.mapRoute({
      moduleId: "login",
      name: "login",
      route: ["login"],
      title: "login",
      nav: false
    });
  }
}
