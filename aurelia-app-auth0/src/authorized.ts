// export class AuthorizedValueConverter {
//   toView(value) {
//     console.log("++++++++++++++++++")
//     console.log("++++++++++++++++++")
//     console.log("++++++++++++++++++")
//     console.log("FOOBARBAZ");
//     console.log("++++++++++++++++++")
//     console.log("++++++++++++++++++")
//     return value;
//   }
// }

import {
  autoinject,
  noView,
  valueConverter,
} from "aurelia-framework";
import { NavModel } from "aurelia-router";
import { User } from "oidc-client";
import { OpenIdConnectRoles } from "aurelia-open-id-connect";

// We use `noView` to prevent Aurelia from looking for a related .html file.
// todo: Use `export default` once Aurelia releases a build with the bug fix.
// todo: The bug issue is here: https://github.com/aurelia/templating/issues/498
@autoinject
// @noView
// @valueConverter("open-id-connect-role-filter")
export class AuthorizedValueConverter {

  public toView(navigation: NavModel[], user: User) {

    return navigation.filter((element) => {
      if (!element.settings.allowRoles) {
        return true;
      }

      const roles: OpenIdConnectRoles[] = element.settings.allowRoles;

      if (roles.indexOf(OpenIdConnectRoles.Authenticated) >= 0) {
        return user !== null;
      }
    });
  }
}

