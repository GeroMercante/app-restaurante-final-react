### Proyecto inicializado
-- `yarn create react-app ./`
-- instalacion de tailwind css
-- instalacion de material ui/core 

# Proceso de limpieza
-- Hecho.

## Creación del router
-- Distribución de las páginas.
-- Crear componentes.
-- Importar y Exportar imagenes a utilizar.

### Componente del header
-- Se empezó a crear el Header que se va a utilizar en la app.

### `yarn test`

### Firebase
-Se intaló el firebase mediante node package manager, npm install -g firebase-tools, puede tambien instalarse el CLI(Interfaz de línea de comandos)

### conexion al firebase y distribucion de datos
-- se declaro mediante un JSON que nos brinda el firebase las configuariciones de conexion de nuestro proyecto -> `const firebaseConfig`

-- se "forzo" una conexiona solida en la `const app`, para acceder a sus metodos, funciones y variables de entorno.

#### distribución de datos 
en las constantes `firestore(array de objeto) y storage(imagenes)` se instanció donde van a reservar memoria y alojar datos en nuestro firebase igualandolos a funciones que nos viene en el firebase cli (nos redirecciona datos automaticamente) mas el forzado de conexión, tambien para una transerencia mas solida.
porque en caso de fallar `app`, estos metodos no estaran disponibles y no genereran ningun tipo de mal funcionamiento.

se exporto la distribucion de datos y la `conexion solida como buena práctica`.

#### Se creó un archivo para manipulacion del firebase
`firebaseFunctions.js` lo que contiene, es exportar funcionalidades de forma asincronica para, en este caso, guardar todo tipo de cambio que hayamos hecho en datos. Esto no estara alojado en un localStorage. se creo `saveItem` que espera una respuesta asincronica por parte del setDoc, donde colocamos el `firestore` como parametro, ademas instanciamos el foodItems, dandole a cada uno, una reserva y alojamiento de datos en `${Date.now()}`

mientras que `getAllFoodItems` nos imprimira en pantalla del home mediante un query, la coleccion de firestore + fooditems, por la id y de mandera descendiente, aunque esto no afecta, porque despues lo manipulamos mediante funciones de accesibilidad. pero para tener un registro mas legible, colocamos el desc, lo mas antiguo arriba, y lo mas nuevo se ubica por debajo de la lista.

una vez almacenado de forma ordenada en la coleccion, nos va a retornar los items mediante el metodo `map()`, documento por documento haciendo un `data()` de todo eso.


#### manipulacion de canales, peticiones y respuestas.
creamos un `fetchUser()` e instaciamos que si el usuario esta logueado, vamos a hacer una reserva de memoria en el localStorage, almacenando nuestros datos para futuras conexiones, ademas que estos datos, tienen la particularidad de que son muy livianos, y podemos almacenarlos, tanto en el localStorage, como en el firebase.
Con el `fetchCart` sucede lo mismo, que es para añadir items al carrito, y que me guarde en caso de tener una conexion interrumpida, se salven los cambios que hemos seleccionado. Esto es una buena práctica, no pasa con frecuencia, pero es necesaria. ademas si tenemos que hacer un envio de datos por ej, de pago, esos datos se enviarán de una forma mas solida y segura.

###### luego a todo esto lo llevamos al initialState.js ######## 
importamos en dicho archivo el `fetchCart y fetchUser` para asigarles un valor inicial. También asi, a todos elementos que vamos a utilizar para manipular el virtualDOM. para eso, creamos una constante `initialState` donde va almacenar los datos iniciales de cada elemento, de usuario, de items, eventos del DOM.

##### creeando archivo que controlara la transferencia de datos
`reducer.js`

exportamos y creamos un array de objetos que contiene constantes para llevar un registro de datos y aplicarle casos al mismo dentro de un bucle switch.

exportamos constantes para su manipulacion fuera del archivo, y dentro del mismo aplicamos controles y operadores.
en este caso reducer recibe como parametro estado y accion.

en el switch instanciamos el tipo de acciones, tomemos como ejemplo el caso `actionType.SET_USER`->
 ...state, cuando se estado cambie, nos va a retornar un array con una lista de argumentos que se han alterado.
y en `user: action.user` llevara un registro de todas las acciones que se han hecho entorno al usuario, y eso lo retorna mediante el spread operator. 

en caso que no retorne nada, o este de visita suponte con la pagina estatica, lo vamos a renderizar que retorne valores por default y que no generé tipos de cambios, haciendo la app mas optima, ya que sus estados por default son estaticos y no tipados.

#### como funcionan?
`StateProvider.js` estó es lo que mueve toda la transferencia de componente a otro. ya que estamos utilizando un contexto muy potente, de varios componentes y varios tipo de datos. entonces su uso es buenisimo porque comunica componentes funcionales a través del contexto. 
tomamos como parametros estados iniciales de elementos mediante el `useReducer`  que sirve para hacer cambios en el estado, pero que se hagan de manera completamente transparente mediante ellos. de este modo, nosotros no vamos a cambiar los estados y por lo tanto el flujo de la informacion dentro de la aplicacion va a ser mucho mas simple y solida.

en resumen, el `useContext y createContext` permite la transferencia de datos mediante componentes y manipulacion de ellos, mientras que el `useReducer` va a llevar a cabo un control riguroso de esos datos que solo se manipulan mediante el virtualDOM.


### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ###
`HASTA ACA SOLO TENEMOS LO QUE ES LA CONEXION Y LOGISTICA DE DATOS`
### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ###

luego en componentes vamos llamando a todas estas interfaces y modulos y accediendo a sus metodos de ejecucion indirecta.

