// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// import 'zone.js/dist/zone-error';

export const environment = {
  production: false,
  firebase: {
    // For your own projects please use different keys
    apiKey: 'AIzaSyDMBWXpXO9OHXTyjXRfXRZxf8CyQ0sF2fQ',
    authDomain: 'wirvsvirus2.firebaseapp.com',
    databaseURL: 'https://wirvsvirus2.firebaseapp.com',
    //databaseURL: 'http://localhost:9000',
    projectId: 'wirvsvirus2',
    storageBucket: 'wirvsvirus2.appspot.com',
  }
};
