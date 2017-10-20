# aurelia-open-id-connect-demos

Demos of [aurelia-open-id-connect](https://github.com/shaunluttin/aurelia-open-id-connect).

# usage

    git clone git@github.com:shaunluttin/aurelia-open-id-connect-demos.git
    cd aurelia-app-auth0
    npm install
    npm run demo

Once the app is running, visit `http://localhost:9000`

**Auth0** demo account (with the BigFont Auth0 tenant)

* User name: `auth0test01@shaunluttin.com`
* Password: `v1Qg@LPLR0k0cJ6Z`

**Azure Active Directory** demo account (with the BigFontOutlook tenant)

* User name: `throwaway01@bigfontoutlook.onmicrosoft.com`
* Password: `%%37DSIbGe*krCeh`

**IdentityServer** demo account details are here https://demo.identityserver.io/

# troubleshooting

* **Azure Active Directory** If you receive a **No key matching kid or alg found in signing keys** error,
then open `azure-signing-keys.ts` and follow its update instructions.

* **All demos** Check that you have installed the most recent plugin version: `npm view aurelia-open-id-connect version`
