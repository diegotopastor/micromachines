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

		//coordenadas del coche, posición x,y y el ancho y el alto que ocupa cada imagen del coche en el sprite
		this.spritecar = {
			top: { x: 0, y: 0, width: 100, height:100 },
			left: { x: 0, y: 0, width: 100, height:100 },
			right: { x: 0, y: 0, width: 100, height:100 },
			down: { x: 0, y: 0, width: 100, height:100 },
			topRight: { x: 0, y: 0, width: 100, height:100 },
			topLeft: { x: 0, y: 0, width: 100, height:100 },
			downRight: { x: 0, y: 0, width: 100, height:100 },
			downLeft: { x: 0, y: 0, width: 100, height:100 }
		};

		//datos que pueden ir cambiando como la dirección del coche, la velocidad
		this.source = {
			direction: "top",
			speed: 1,
			map_start: {x:10, y:10} //inicio de la posición del mapa
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