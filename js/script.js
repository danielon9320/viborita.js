//intervalo de cada cuanto ms se ejecuta looper
const INTERVALO = 80;

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
//objeto con direcciones snake
let controles = { direccion: { x: 1, y: 0 }, snake: [{ x: 0, y: 0 }] };
let direccion;

//referenciar canvas
let papel = document.querySelector("canvas");

//genero contexto de canvas
let ctx = papel.getContext("2d");

//loop para dar movilidad a snake. Borra y volver a dibjar canvas. request animation frame
let looper = () => {
  const cabezaSnake = controles.snake[0];
  let posicionX = controles.direccion.x;
  let posicionY = controles.direccion.y;
  cabezaSnake.x += posicionX;//para movimiento
  cabezaSnake.y += posicionY;//para movimiento
  requestAnimationFrame(dibujarSnake);

  console.log("looper");
  setTimeout(looper, INTERVALO);
};
document.onkeydown = (e) => {
  direccion = DIRECCION[e.key];
  console.log(direccion);
};

//funcion para dibujar snake cada vez q se actualice posicion
let dibujarSnake = (color) => {
  //borrar context
  ctx.clearRect(0, 0, 500, 500);
  //color de lo que voy a crear(serpiente)
  ctx.fillStyle = "green";
  const cabezaSnake = controles.snake[0];
  //dibujar rectangulo. Espera 4 valores. X eje horizontal, y eje vertical,ancho,alto.
  ctx.fillRect(cabezaSnake.x, cabezaSnake.y, 10, 10);
};

//llamar looper cuando funcion se hay cargado
window.onload = () => {
  //looper();
};
