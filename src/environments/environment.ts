// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiURL:'https://cart-spring.herokuapp.com/'
  apiURL: 'http://localhost:9090',
  firebaseConfig: {
    apiKey: "AIzaSyDTaOTNYyjWysPbVUQG5v-OHgfpf8fC8pk",
    authDomain: "cart-spring.firebaseapp.com",
    databaseURL: "https://cart-spring.firebaseio.com",
    projectId: "cart-spring",
    storageBucket: "cart-spring.appspot.com",
    messagingSenderId: "776049638323",
    appId: "1:776049638323:web:c143f1be6bef6c3ecfe9c6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
