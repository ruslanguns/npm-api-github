# API de GitHub
Con esta API vamos a obtener los datos de usuario de GitHub.

## Intrucción
Seguir las siguientes instrucciones

### Instalación
```
npm i proj-1-api-github
```

```
const API = require( 'proj-1-api-github' );

API.getUserData( 'user' )  // user = nombre de usuario en GitHub
	.then(
    	resp => console.log( resp )
    ).catch( error => console.log( error ));
```
