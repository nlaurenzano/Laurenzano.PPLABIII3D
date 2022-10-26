import {Anuncio_Mascota} from "./anuncio_mascota.js";
import { datos, cargarDatos, guardarDatos } from './localstorage.js';
import { crearTabla, buscarPorId } from './tabla.js';
import { cargarCampos, limpiarCampos, valorCampo, eliminarElemento, modificarElemento, agregarValidaciones, validarCampos } from './form.js';


const $divTabla = document.querySelector("#divTabla");

agregarValidaciones();
cargarDatos();
actualizarTabla();

$divTabla.addEventListener("click", (e) => {
	const emisor = e.target;
	if (emisor.matches("tbody tr td")) {
		let id = emisor.parentElement.dataset.id;
		const elemento = buscarPorId(datos,id);
		cargarCampos(elemento);

		// Muestra botones para edición
		const botonesEdicion = document.querySelectorAll(".edicion");
		for (let i = 0; i < botonesEdicion.length; i++) {
			botonesEdicion.item(i).style.display = "block";
		}
	}
});


const $formulario = document.forms[0];

// Botón Guardar
$formulario.addEventListener("submit", (e) => {
	e.preventDefault();

	if (validarCampos(e)) {
		const id = document.forms[0].getAttribute("data-id");
		const { titulo, descripcion, precio, animal, raza, nacimiento, vacunas} = e.target;
		const nuevoElemento = crearDato(Date.now(), titulo, descripcion, precio, animal, raza, nacimiento, vacunas);

		if (id) {
			modificarDato(nuevoElemento);
		} else {
			agregarDatos(nuevoElemento);
		}

	   limpiarCampos();
	}



});


// Botón Cancelar
document.getElementById("btnCancelar").addEventListener("click", limpiarCampos);

// Botón Eliminar
document.getElementById("btnEliminar").addEventListener("click", eliminarDato);




function agregarDatos(elemento) {
   datos.push(elemento);
   console.log(datos);
   guardarDatos();
   actualizarTabla();
}

function modificarDato(elemento) {
	modificarElemento(datos, elemento);
	guardarDatos();
	actualizarTabla();
}

function eliminarDato() {
	eliminarElemento(datos);
	guardarDatos();
	actualizarTabla();
}


function crearDato(id, titulo, descripcion, precio, animal, raza, nacimiento, vacunas) {

	return new Anuncio_Mascota(id, valorCampo(titulo), 
		valorCampo(descripcion), 
		valorCampo(precio), 
		valorCampo(animal), 
		valorCampo(raza), 
		valorCampo(nacimiento), 
		valorCampo(vacunas));
}

function actualizarTabla() {

	// Se agrega un spinner por un breve tiempo, para simular tiempo de carga
	while($divTabla.hasChildNodes()) {
		$divTabla.removeChild($divTabla.firstChild);
	}
	const $img = document.createElement("img");
	$img.src = "./recursos/loading.gif";
	$img.classList.add("spinner");
	$divTabla.appendChild($img);

	setTimeout(() => {
		while($divTabla.hasChildNodes()) {
			$divTabla.removeChild($divTabla.firstChild);
		}
		$divTabla.appendChild(crearTabla(datos));
	}, 3000);
}
