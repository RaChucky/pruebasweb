// Importar las preguntas y respuestas
import { preguntasYRespuestas } from "./preguntas-y-respuestas.js";


// Seleccionar los elementos de DOM
const contenedorPregunta = document.querySelector('#contenedor-pregunta');     // Con la '#' seleccionamos un 'id' 
const contenedorOpciones = document.querySelector('#contenedor-opciones'); 

// La propiedad innerHTML permite acceder o modificar el contenido HTML de un elemento del
// DOM (Documento Object Model),incluyendo tanto el texto como las etiquetas HTML internas.
// Mantenemos la esctructura del <h2> para que se mantengan los estilos.
contenedorPregunta.innerHTML ='<h2 class="pregunta">Selecciona el tema:</h2>'


// Un objeto tiene clave (capitales, programacion...) 
// y un valor (el arreglo de las preguntas y respuestas)
// Solo necesitamos las claves para dibujarlas en el "contenedorOpciones"

// Mediante el ojbeto "Object" y el método "keys" accedemos a esas claves.
// El método "forEach" recorre el arreglo; que actualmente tiene dos opciones,
// y con una función flecha "=>" le especificamos que tiene que hacer con cada
// una de estas opciones. Dentro de la función flecha vamos a crear una variable
// "opcion" que va a representar cada una de estas opciones

Object.keys(preguntasYRespuestas).forEach((opcion)=>{
    contenedorOpciones.innerHTML += `<p class="opcion">${opcion.toUpperCase()}</p>`
})

// Con ` ` podemos insertar código javascrip sobre html; $(opcion) es javascript.
// Añadieno el metodo ".toUpperCase()" ponemos el texto en mayusculas.
// con el signo + delante del = le decimos que se vayan agregando los objetos.

// SEGUIR VIDEO EN 50:00