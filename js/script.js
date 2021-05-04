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
			//audioinit: "src/audio.mp3",
			background: "img/mapafondo.png",
			circuit: "img/circuito.png",
			car: "img/cochesprite.png"
		};

		//coordenadas del coche, posición x,y y el ancho y el alto que ocupa cada imagen del coche en el sprite
		this.spritecar = {
			top: { x: 0, y: 0, width: 55, height:74 },
			topRight: { x: 58, y: 0, width: 74, height:74 },
			right: { x: 138, y: 0, width: 58, height:74 },
			downRight: { x: 199, y: 0, width: 72, height:74 },
			down: { x: 280, y: 0, width: 56, height:74 },
			downLeft: { x: 339, y: 0, width: 74, height:74 },
			left: { x: 419, y: 0, width: 58, height:74 },
			topLeft: { x: 480, y: 0, width: 74, height:74 }
		};

		//datos que pueden ir cambiando como la dirección del coche, la velocidad
		this.source = {
			direction: "top",
			speed: 1,
			map_start: {x: -1400, y: -1700}, //inicio de la posición del mapa
			car_start: {x: 445, y: 210, width: 55, height: 74} //inicio posición del coche
		};

		// 1º Tiene que 'registrar' el canvas con el this y darle el tamaño

			// Hace referencia a la etiqueta HTML <canvas>: Nos da los atributos de cualquier elemento html (tamaño, etc)
			this.canvas = document.getElementById("game");
			this.canvas.width = this.canvasSize.width;
			this.canvas.height = this.canvasSize.height;
			
			// Hace referencia al OBJETO canvas: Nos da funciones como "pintar"
			this.canvasContext = this.canvas.getContext("2d");

		// CARGAR DATOS:
			// Cargar el fondo en memoria: Lo guardamos en un this
			this.imgBackground = new Image();
			this.imgBackground.src = this.resources.background;

			// Cargar el circuito en memoria: Lo guardamos en un this
			this.imgCircuit = new Image();
			this.imgCircuit.src = this.resources.circuit;

			// Carga el coche en memoria: Lo guardamos en un this.
			this.imgCar = new Image();
			this.imgCar.src = this.resources.car;

		// Llamamos a renderizar(); cuando fondo/coche estén cargados.
			// this.renderizar();
			this.imgCircuit.addEventListener('load', ()=>{
				this.renderizar();
			});

		//  ME EJECUTES 10 veces por segundo la función renderizar
			
	}

	pintaMapa(){
		console.log("pintando mapa...");

		// PEGAR EL MAPA EN EL CANVAS: SIN RENDERIZAR
			// https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
			// https://www.w3schools.com/tags/canvas_drawimage.asp
		
			this.canvasContext.drawImage(this.imgBackground, this.source.map_start.x,this.source.map_start.y);
			this.canvasContext.drawImage(this.imgCircuit,this.source.map_start.x,this.source.map_start.y);
	}

	pintaCoche(){
		console.log("pintando coche...");

		// PEGAR EL COCHE
			// https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
			// https://www.w3schools.com/tags/canvas_drawimage.asp

			this.canvasContext.drawImage(
				this.imgCar,
				this.spritecar[this.source.direction].x,
				this.spritecar[this.source.direction].y,
				this.spritecar[this.source.direction].width,
				this.spritecar[this.source.direction].height,
				this.source.car_start.x,
				this.source.car_start.y,
				this.source.car_start.width,
				this.source.car_start.height				
			);
		console.log(this.spritecar[this.source.direction].x);	
	}

	 avanza_coche(){

		// 1º Recogemos this.source.direction

		// Y con un IF (o muchos), sumamos o restamos a this.source.map_start

	}

	renderizar(){

		this.avanza_coche();

		this.pintaMapa();

		this.pintaCoche();

	}

}

window.onload = function(){
	game = new Game();
}



class Teclado{
	constructor(){

		this.letters = {
			ArrowLeft: false,
			ArrowRight: false,
			ArrowUp: false,
			ArrowDown: false
		};

		// Hacia abajo
		document.onkeydown = (e) => {
			// Cambiamos el objeto letters

			// Ejecutamos el método save_position()
		}

		// Hacia arriba

	}

	save_position(){

		// 1º Recogemos el this.letters

		// 2º Dependiendo los true/false guardamos una posición u otra en
			// game.source.direction
	}

}

var teclado = new Teclado;