/**
 * Juego Micromachines:
 * Tenemos un circuito(mapa), un coche, obstáculos, sonidos, contador de vueltas, un teclado para manejar el coche.
 * Nos podemos salir del circuito. Reiniciando la posición del coche o ralentizando la marcha del coche.
 * Nos podemos chocar, o ralentizar o acelerar la marcha según el obstáculo.
 */


/*
	Para la siguiente clase:
	- Detectar siguiente pixel
	- Si es negro, corre el doble, #000000 - 0,0,0
	- Si es rojo, corre normal  #ED1B23 - 237,28,36
	- Si es blanco, corre la mitad #FFFFFF - 255,255,255
	- Si es verde, sale un alert ¡Has ganado! #3ED201 - 63,210,0
	- Si es azul: El coche se para. #3F49CC - 63,73,204
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
			top: { x: 0, y: 0, width: 27, height: 37 },
			topRight: { x: 30, y: 0, width: 36, height: 37 },
			right: { x: 70,  y: 0, width: 27, height: 37 },
			downRight: { x: 100, y: 0, width: 35, height: 37 },
			down: { x: 140, y: 0, width: 28, height: 37 },
			downLeft: { x: 170, y: 0, width: 36, height: 37 },
			left: { x: 210, y: 0, width: 28, height: 37 },
			topLeft: { x: 240, y: 0, width: 36, height: 37 }
		};

		//datos que pueden ir cambiando como la dirección del coche, la velocidad
		this.source = {
			direction: "top",
			speed: 5,
			map_start: {x: -1400, y: -1700}, //inicio de la posición del mapa
			car_start: {x: 460, y: 220, width: 27, height: 37}, //inicio posición del coche
			pixel_red: {r:237, g:28 ,b:36},
			pixel_green: {r:63, g:210 ,b:0},
			pixel_blue: {r:63, g:73 ,b:204},
			pixel_black: {r:0, g:0 ,b:0},
			pixel_white: {r:255, g:255 ,b:255}
		};

		// 1º Tiene que 'registrar' el canvas con el this y darle el tamaño

			// Hace referencia a la etiqueta HTML <canvas>: Nos da los atributos de cualquier elemento html (tamaño, etc)
			this.canvas = document.getElementById("game");
			this.canvas.width = this.canvasSize.width;
			this.canvas.height = this.canvasSize.height;
			
			// Hace referencia al OBJETO canvas: Nos da funciones como "pintar"
			this.canvasContext = this.canvas.getContext("2d");


			// Hace referencia a la etiqueta HTML <canvas>: Nos da los atributos de cualquier elemento html (tamaño, etc)
			this.canvasbg = document.getElementById("background");
			this.canvasbg.width = this.canvasSize.width;
			this.canvasbg.height = this.canvasSize.height;
			
			// Hace referencia al OBJETO canvas: Nos da funciones como "pintar"
			this.canvasbgContext = this.canvasbg.getContext("2d");


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
			setInterval(()=>{
				this.renderizar();
				}, 100);
			
	}

	pintaMapa(){
		
		// PEGAR EL MAPA EN EL CANVAS: SIN RENDERIZAR
			// https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
			// https://www.w3schools.com/tags/canvas_drawimage.asp
			this.canvasbgContext.drawImage(this.imgBackground, this.source.map_start.x,this.source.map_start.y);
			this.canvasContext.drawImage(this.imgCircuit,this.source.map_start.x,this.source.map_start.y);
	}

	pintaCoche(){

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
	}

	avanza_coche(){
		
		// 1º Recogemos this.source.direction
		let direction = this.source.direction;
		
		// Y con un IF (o muchos), sumamos o restamos a this.source.map_start
		if(direction == "top"){
			this.source.map_start.y += this.source.speed;
		}

		if(direction == "down"){
			this.source.map_start.y -= this.source.speed;
		}

		if(direction == "right"){
			this.source.map_start.x -= this.source.speed;
		}

		if(direction == "left"){
			this.source.map_start.x += this.source.speed;
		}

		if(direction == "topLeft"){
			this.source.map_start.x += this.source.speed;
			this.source.map_start.y += this.source.speed;
		}

		if(direction == "topRight"){
			this.source.map_start.x -= this.source.speed;
			this.source.map_start.y += this.source.speed;
		}

		if(direction == "downLeft"){
			this.source.map_start.x += this.source.speed;
			this.source.map_start.y -= this.source.speed;
		}

		if(direction == "downRight"){
			this.source.map_start.x -= this.source.speed;
			this.source.map_start.y -= this.source.speed;
		}
	}

	nextPixel(){

		// Jugaremos con el pixel de canvasbgcontext
		// https://www.w3schools.com/tags/canvas_getimagedata.asp
		// https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_getimagedata_firstpx

		let pixel;

		//obtenemos las cordenadas del pixel segun la dirección del coche
		switch(this.source.direction){
			case "top":
				pixel = this.canvasbgContext.getImageData((this.source.car_start.x/2),this.source.car_start.y,1,1);
				break;
			case "down":
				pixel = this.canvasbgContext.getImageData((this.source.car_start.x/2),this.source.car_start.y-this.source.car_start.height-1,1,1);
				break;
			case "left":
				pixel = this.canvasbgContext.getImageData((this.source.car_start.x),this.source.car_start.y/2,1,1);
				break;
			case "right":
				pixel = this.canvasbgContext.getImageData((this.source.car_start.x+this.source.car_start.width),this.source.car_start.y/2,1,1);
				break;
			// case "topLeft":
			// 	pixel = this.canvasbgContext.getImageData((this.source.car_start.x/2),this.source.car_start.y+1,1,1);
			// 	break;
			// case "topRight":
			// 	pixel = this.canvasbgContext.getImageData((this.source.car_start.x/2),this.source.car_start.y+1,1,1);
			// 	break;
			// case "downLeft":
			// 	pixel = this.canvasbgContext.getImageData((this.source.car_start.x/2),this.source.car_start.y+1,1,1);
			// 	break;
			// case "downRight":
			// 	pixel = this.canvasbgContext.getImageData((this.source.car_start.x/2),this.source.car_start.y+1,1,1);
			// 	break;
				
		}
		
		let red = pixel.data[0];
		let green = pixel.data[1];
		let blue = pixel.data[2];
		
		//comprobamos los valores RGB del pixel en el siguiente orden:
		//Rojo, Azul, Negro, Blanco y Verde
		if(red == this.source.pixel_red.r && green == this.source.pixel_red.g && blue == this.source.pixel_red.b){
			return true;
		}else if(red == this.source.pixel_blue.r && green == this.source.pixel_blue.g && blue == this.source.pixel_blue.b){
			return false;
		}else if(red == this.source.pixel_black.r && green == this.source.pixel_black.g && blue == this.source.pixel_black.b){
			this.source.speed *= 2;
			return true;
		}else if(red == this.source.pixel_white.r && green == this.source.pixel_white.g && blue == this.source.pixel_white.b){
			this.source.speed *= 0.5;
			return true;
		}else if(red == this.source.pixel_green.r && green == this.source.pixel_green.g && blue == this.source.pixel_green.b){
			//alert("Has ganado!!");
			return true;
		}
		
		console.log(red,green,blue);
		
	}

	renderizar(){

		this.pintaMapa();

		this.pintaCoche();

		var status = this.nextPixel();

		if(status){
			this.avanza_coche();
		}

	}

}

class Teclado{
	constructor(){
		
		this.letters = {
			ArrowLeft: false,
			ArrowRight: false,
			ArrowUp: false,
			ArrowDown: false
		};
		
		//Controlamos que tecla de dirección se ha pulsado y la ponemos a true
		document.onkeydown = (e) => {

			var e = e || window.event;

			if(e.key == "ArrowLeft"){ this.letters.ArrowLeft = true; }

			if(e.key == "ArrowRight"){ this.letters.ArrowRight = true; }

			if(e.key == "ArrowUp"){ this.letters.ArrowUp = true; }

			if(e.key == "ArrowDown"){ this.letters.ArrowDown = true; }			

			// Ejecutamos el método
			this.save_direction();
		}

		document.onkeyup = (e) => {

			var e = e || window.event;

			if(e.key == "ArrowLeft"){ this.letters.ArrowLeft = false; }

			if(e.key == "ArrowRight"){ this.letters.ArrowRight = false; }

			if(e.key == "ArrowUp"){ this.letters.ArrowUp = false; }

			if(e.key == "ArrowDown"){ this.letters.ArrowDown = false; }			

			// Ejecutamos el método
			this.save_direction();
		}		

	}

	save_direction(){
		
		// 1º Recogemos el this.letters
		let tecla = this.letters;
		// 2º Dependiendo los true/false guardamos una posición u otra en
			// game.source.direction
			if(tecla.ArrowLeft){ game.source.direction = "left"; }

			if(tecla.ArrowRight){ game.source.direction = "right"; }

			if(tecla.ArrowUp){ game.source.direction = "top"; }

			if(tecla.ArrowDown){ game.source.direction = "down"; }

			if(tecla.ArrowLeft && tecla.ArrowUp){ game.source.direction = "topLeft"; }

			if(tecla.ArrowLeft && tecla.ArrowDown){ game.source.direction = "downLeft"; }

			if(tecla.ArrowRight && tecla.ArrowUp){ game.source.direction = "topRight"; }

			if(tecla.ArrowRight && tecla.ArrowDown){ game.source.direction = "downRight"; }

	}

}

window.onload = function(){
	game = new Game();
	teclado = new Teclado;
}

