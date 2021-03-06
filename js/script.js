//intervalo de cada cuanto ms se ejecuta looper
const INTERVALO = 80;
const PESO = 10;
//ancho y alto cancas
const ANCHO = 500;
//configuracion de direcciones
const DIRECCION = {
  //creo objeto donde guardo las posibles direcciones
  A: [-1, 0],
  D: [1, 0],
  S: [0, 1],
  W: [0, -1],
  a: [-1, 0],
  d: [1, 0],
  s: [0, 1],
  w: [0, -1],
  ArrowDown: [0, 1],
  ArrowUp: [0, -1],
  ArrowRight: [1, 0],
  ArrowLeft: [-1, 0],
};

/////////////objeto con direcciones snake
let controles = {
  direccion: { x: 1, y: 0 },
  snake: [{ x: 0, y: 0 }],
  presa: { X: 0, y: 250 },
  enJuego: false,
};
////////////////////*********//////////

//variable con las direcciones
let direccion;

//referenciar canvas
let papel = document.querySelector("canvas");

//genero contexto de canvas
let ctx = papel.getContext("2d");

//loop para dar movilidad a snake. Borra y volver a dibjar canvas. request animation frame
let looper = () => {
  //referencio la cabeza del snake
  const cabezaSnake = controles.snake[0];
  //referencio la direccion actal
  let posicionX = controles.direccion.x;
  let posicionY = controles.direccion.y;
  //sumo direccion a su posicion
  cabezaSnake.x += posicionX; //para movimiento
  cabezaSnake.y += posicionY; //para movimiento
  //llamo a la animacion a dibujar
  requestAnimationFrame(dibujarSnake);
  //llamar a la funcion luego de X intervalo
  setTimeout(looper, INTERVALO);
};
/******************************************* */
document.onkeydown = (e) => {
  //guardo la nueva direccion
  direccion = DIRECCION[e.key];
  //deconstruyo x e y
  const [x, y] = direccion;
  //valido movimientos para que no vaya en direccion contraria
  if (-x !== controles.direccion.x && -y !== controles.direccion.y) {
    //asigno las direcciones a mis controles
    controles.direccion.x = x;
    controles.direccion.y = y;
  }
};
/********************************************* */
//funcion para dibujar snake cada vez q se actualice posicion
let dibujarSnake = (color) => {
  
  //instancio cabeza snake
  const cabezaSnake = controles.snake[0];
  const victima = 
};

//****************************************** */
let dibujar = (color, x,y) => {
  //borrar canvas
  ctx.clearRect(0, 0, ANCHO, ANCHO);
  //color de lo que voy a crear(serpiente)
  ctx.fillStyle = color;
  //dibujar rectangulo. Espera 4 valores. X eje horizontal, y eje vertical,ancho,alto.
  ctx.fillRect(cabezaSnake.x * PESO, cabezaSnake.y * PESO, PESO, PESO);
}

/******************************************** */
//funcion que genera posicion inicial aleatoria
let posicionRandom = () =>{
  let address = Object.values(DIRECCION);
  return{
    x: parseInt(Math.random()*ANCHO/PESO),
    y: parseInt(Math.random()*ANCHO/PESO),
    d: address[parseInt(Math.random()*11)]
  }

};
/******************************************/
//llamar looper cuando funcion se hay cargado
window.onload = () => {
    posiciones = posicionRandom();
    let head = controles.snake[0];
    head.x = posiciones.x;
    head.y = posiciones.y;
    controles.direccion.x = posiciones.d[0];
    controles.direccion.y = posiciones.d[1];
    
    looper();
};
