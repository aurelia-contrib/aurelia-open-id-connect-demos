# aurelia-open-id-connect-demos

Demos of [aurelia-open-id-connect](https://github.com/shaunluttin/aurelia-open-id-connect).

# usage

Each demo has its own README.md that explains how to use it.

# logins

**Auth0** account (with the BigFont Auth0 tenant)

* User name: `auth0test01@shaunluttin.com`
* Password: `v1Qg@LPLR0k0cJ6Z`

**Azure Active Directory** account (with the BigFontOutlook tenant)

    User name: throwaway01@bigfontoutlook.onmicrosoft.com
    Password: %%37DSIbGe*krCeh

**Identity Server** account details are here https://demo.identityserver.io/

# troubleshooting

Check that you have installed the most recent plugin version: `npm view aurelia-open-id-connect version`

**Azure** If you receive a No key matching kid or alg found in signing keys error, then open azure-signing-keys.ts and follow its update instructions.
