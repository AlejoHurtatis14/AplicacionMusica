// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  idCliente: '719003813794-uvajjr2mg6q55ml0jakouko0hj78s4hn.apps.googleusercontent.com',
  redireccionamientoLogin: 'http://localhost:4200/',
  tipoRespuesta: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

//URL peticion de acceso a plataforma con api de google
//https://accounts.google.com/o/oauth2/v2/auth?client_id=719003813794-uvajjr2mg6q55ml0jakouko0hj78s4hn.apps.googleusercontent.com&redirect_uri=http://localhost:4200/&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email
