import { datos, cargarDatos } from './localstorage.js';
import { cargarTarjetas } from './tabla.js';


cargarDatos();
cargarTarjetas(datos);