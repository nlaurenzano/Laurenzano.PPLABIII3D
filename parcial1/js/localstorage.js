
// console.log(localStorage);

// Para obtener una variable del localstorage usamos:
// let variable = localStorage.getItem("nombreVariable");
// retorna null si no existe o el valor como string

// Para agregar una variable en el localStorage usamos:
// localStorage.setItem("nombreVariable", "valor"); // valor es string

// Para eliminar una variable del localStorage usamos:
// localStorage.removeItem("nombreVariable");

// Para limpiar todo el localStorage usamos:
// localStorage.clear();

const datosIniciales=[{"id":1,"titulo":"Mascota 1","descripcion":"es pequeño","animal":"gato","precio":"20000","raza":"siames","nacimiento":"10/12/2020","vacunas":"si"},
{"id":2,"titulo":"Mascota 2","descripcion":"es mediano","animal":"perro","precio":"10000","raza":"caniche","nacimiento":"10/03/2018","vacunas":"si"},
{"id":2,"titulo":"Mascota 3","descripcion":"es grande","animal":"perro","precio":"12000","raza":"golden retriever","nacimiento":"23/08/2019","vacunas":"no"}]

export const datos=[];

export function cargarDatos() {
// localStorage.clear();
  if (localStorage.getItem("datos")) {
    JSON.parse(localStorage.getItem("datos")).forEach((element) => {
      datos.push(element);
    });
  } else {
    datos.splice(0, 0, ...datosIniciales);
  }
}

export function guardarDatos() {
  localStorage.setItem("datos",JSON.stringify(datos));
}
