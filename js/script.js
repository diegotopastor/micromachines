/**
 * Juego Micromachines:
 * Tenemos un circuito(mapa), un coche, obstáculos, sonidos, contador de vueltas, un teclado para manejar el coche.
 * Nos podemos salir del circuito. Reiniciando la posición del coche o ralentizando la marcha del coche.
 * Nos podemos chocar, o ralentizar o acelerar la marcha según el obstáculo.
 */

class Game{
	constructor(){

		this.canvasSize = { width: 1000, height: 500 };

		this.resources = {
			audioinit: "src/audio.mp3",
			background: "img/mapafondo.png",
			circuit: "img/circuito.png",
			car: "img/cochesprite.png"
		};

		this.spritecar = {
			top: { x: 0, y: 0, width: 100, height:100 },
			left: { x: 0, y: 0, width: 100, height:100 }
			// ...
		}

		this.source = {
			direction: "top",
			speed: 1,
			map_start: {x:10, y:10}
		};

		// 1º Tiene que 'registrar' el canvas con el this y darle el tamaño

			// Hace referencia a la etiqueta HTML <canvas>: Nos da los atributos de cualquier elemento html (tamaño, etc)
			this.canvas = "";
				// console.log(this.canvas);

			// Hace referencia al OBJETO canvas: Nos da funciones como "pintar"
			this.canvasContext = "";

		// CARGAR DATOS:
			// Cargar el fondo en memoria: Lo guardamos en un this
			// Cargar el circuito en memoria: Lo guardamos en un this
			// Carga el coche en memoria: Lo guardamos en un this.



		// Llamamos a renderizar(); cuando fondo/coche estén cargados.
			// this.renderizar();


	}

	pintaMapa(){
		console.log("pintando mapa...");

		// PEGAR EL MAPA EN EL CANVAS: SIN RENDERIZAR
			// https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
			// https://www.w3schools.com/tags/canvas_drawimage.asp
	}

	pintaCoche(){
		console.log("pintando coche...");
		// PEGAR EL COCHE
			// https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
			// https://www.w3schools.com/tags/canvas_drawimage.asp

	}

	renderizar(){

		this.pintaMapa();

		this.pintaCoche();

	}

}

window.onload = function(){
	game = new Game();
}

class Teclado{
	constructor(){

	}

	arriba(){}
	abajo(){}
	derecha(){}
	izquierda(){}
	//las diagonales??

}