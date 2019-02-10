# API de GitHub
Con esta API vamos a obtener los datos de usuario de GitHub.

## Intrucción
Seguir las siguientes instrucciones

### Instalación
```
npm i api4github
```

```
const API = require( 'api4github' );

API.getUserData( 'user' )  // user = nombre de usuario en GitHub
	.then(
    	resp => console.log( resp )
    ).catch( error => console.log( error ));
```
