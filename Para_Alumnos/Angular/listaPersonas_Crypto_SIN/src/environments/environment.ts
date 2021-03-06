// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,

  API_URL_Login: "http://localhost/ajax/listaLogin/login.php",
  
  //API_URL: "http://localhost/AJAX/LISTA_PERSONAS/LOGIN/Angular/servidor.php",
  API_URL: "http://localhost/ajax/listaLogin/servidor.php",

	cabecera: function(){
		let headers = { headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + localStorage.JWT
		})};
		return headers;
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
