# aurelia-open-id-connect-demos

Demos of [aurelia-open-id-connect](https://github.com/shaunluttin/aurelia-open-id-connect-demos).

# Usage

    git clone git@github.com:shaunluttin/aurelia-open-id-connect-demos.git
    cd aurelia-app
    npm install
    node_modules/.bin/au build
    node_modules/.bin/au run --watch

Once the app is running, visit http://localhost:9000

Log in with the demo account from the BigFontOutlook Azure Active Directory.

* User name: throwaway01@bigfontoutlook.onmicrosoft.com
* Password: %%37DSIbGe*krCeh

Note: If you receive this error: "No key matching kid or alg found in signing keys", then update `azure-signing-keys.ts` file. It includes instructions on how to update itself.
