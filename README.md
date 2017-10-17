# aurelia-open-id-connect-demos

Demos of [aurelia-open-id-connect](https://github.com/shaunluttin/aurelia-open-id-connect).

# Usage

    git clone git@github.com:shaunluttin/aurelia-open-id-connect-demos.git
    cd aurelia-app-auth0
    npm install
    node_modules/.bin/au build
    node_modules/.bin/au run --watch

Once the app is running, visit `http://localhost:9000`

Test account for the BigFont Auth0 Tenant

* User name: `auth0test01@shaunluttin.com`
* Password: `v1Qg@LPLR0k0cJ6Z`

Test account for the BigFontOutlook Azure Active Directory

* User name: `throwaway01@bigfontoutlook.onmicrosoft.com`
* Password: `%%37DSIbGe*krCeh`

# Troubleshooting

* If you receive a **No key matching kid or alg found in signing keys** error,
then open `azure-signing-keys.ts` and follow its update instructions.

* Check that you have installed the most recent plugin version: `npm view aurelia-open-id-connect version`
