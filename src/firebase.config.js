import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDcmO7wxd3PfKmjysopCTXjnfZemcNng2I",
    authDomain: "restauranteapp-a7f90.firebaseapp.com",
    databaseURL: "https://restauranteapp-a7f90-default-rtdb.firebaseio.com",
    projectId: "restauranteapp-a7f90",
    storageBucket: "restauranteapp-a7f90.appspot.com",
    messagingSenderId: "476009132919",
    appId: "1:476009132919:web:74c4b32d2d48d1a2d1a772"
};
        //getApps funcion declarada en firebase. 
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig); //aca vamos a "forzar" la conexion, vamos a inicializarla concretamente sin que haya errores de por medio, entonces si getApp es mayor a 0, va a inicialziar el firebaseStore de manera correcta y sino, va a inicilizar la app mediante el objeto json que obtuvimos desde el firebase

//Distribucion de datos aclaracion, getFirestore son propios del modulo del firebase, tambien en getStorage
const firestore = getFirestore(app)
// aca vamos a llevar un registro de todo array de objeto, basicamente informacion neta

const storage = getStorage(app)
// aca vamos a guardar lo que seria el registro de transferencia de archivos multimedia.

export { app, firestore, storage };
