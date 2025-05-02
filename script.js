const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// function resizeCanvas() {
//   //fit canvas to window and fix issues with canvas blur on zoom
//   canvas.style.width = window.innerWidth + "px";
//   canvas.style.height = window.innerHeight + "px";
//   const scale = window.devicePixelRatio;
//   canvas.width = window.innerWidth * scale;
//   canvas.height = window.innerHeight * scale;
//   ctx.scale(scale, scale);
// }
// resizeCanvas();
// window.addEventListener("resize", resizeCanvas);

//canvas commands  https://www.w3schools.com/tags/ref_canvas.asp
//example drawings


ctx.fillStyle = "Purple"





// DRAWING

ctx.beginPath();
ctx.arc (400, 250, 50, 0, 2 * Math.PI);
ctx.fillstyle = "Purple"
ctx.fill();
ctx.moveTo (700, 350)
ctx.lineTo(300, 350)

ctx.beginPath();
ctx.arc (600, 250, 50, 0, 2 * Math.PI);
ctx.fillstyle = "Purple"
ctx.fill();
ctx.moveTo (700, 350)
ctx.lineTo(300, 350)

ctx.strokeStyle = "red"
ctx.stroke()

ctx.beginPath();
ctx.arc(400, 250, 30, 0, Math.PI)
ctx.stroke()


ctx.beginPath();
ctx.arc(600, 250, 30, 0, Math.PI)
ctx.stroke()

ctx.beginPath();
ctx.moveTo(299, 350);
ctx.lineTo(299, 86);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(700, 35);
ctx.lineTo(299, 86);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(700, 35);
ctx.lineTo(699, 348);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(425, 351);
ctx.lineTo(425, 380);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(556, 351);
ctx.lineTo(556, 380);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(424, 380);
ctx.lineTo(555, 380);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(457, 363);
ctx.lineTo(529, 363);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(424, 380);
ctx.lineTo(248, 380);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(247, 380);
ctx.lineTo(249, 537);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(556, 380);
ctx.lineTo(756, 380);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(756, 380);
ctx.lineTo(756, 536);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(457, 363);
ctx.lineTo(457, 340);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(529, 363);
ctx.lineTo(529, 340);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(248, 415);
ctx.lineTo(124, 350);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(124, 349);
ctx.lineTo(127, 326);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(124, 349);
ctx.lineTo(100, 351);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(124, 349);
ctx.lineTo(108, 331);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(755, 414);
ctx.lineTo(817, 496);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(358, 188);
ctx.lineTo(440, 188);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(565, 188);
ctx.lineTo(640, 188);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(248, 455);
ctx.lineTo(248, 600);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(756, 536);
ctx.lineTo(248, 600);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(313, 593);
ctx.lineTo(313, 700);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(313, 699);
ctx.lineTo(349, 699);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(347, 699);
ctx.lineTo(350, 588);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(682, 546);
ctx.lineTo(682, 699);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(682, 699);
ctx.lineTo(650, 699);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(650, 699);
ctx.lineTo(650, 550);
ctx.stroke();



// const size = ctx.canvas.height
// for (let y = 0; y < size; y+=30) {
//     for (let x = 0; x < size; x+=30) {
//         ctx.fillStyle = `hsl(${x+y},90%,50%)`
//         ctx.fillRect(x, y, 30, 30)
//     }
// }

//___________________get mouse input___________________

// let mouse = {
//   down: false,
//   x: 0,
//   y: 0
// };
// canvas.addEventListener("mousemove", event => {
//   mouse.x = event.clientX;
//   mouse.y = event.clientY;
// });
// canvas.addEventListener("mousedown", event => {
//   mouse.down = true;
//   // console.log(mouse);
// });
// canvas.addEventListener("mouseup", event => {
//   mouse.down = false;
// });
let mouse = {
  down: false,
  x: 0,
  y: 0
};
canvas.addEventListener("mousemove", event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
canvas.addEventListener("mousedown", event => {
  mouse.down = true;
  console.log(mouse);
});
canvas.addEventListener("mouseup", event => {
  mouse.down = false;
});

//___________________new key input method___________________
// let left = false
// let right = false
// let up = false
// let down = false

// window.addEventListener("keyup", function(event) {
//     switch (event.code) {
//         case "ArrowRight":
//             right = false
//             break;
//         case "ArrowLeft":
//             left = false
//             break;
//         case "ArrowUp":
//             up = false
//             break;
//         case "ArrowDown":
//             down = false
//             break;
//     }
// });

// window.addEventListener("keydown", function(event) {
//        switch (event.code) {
//         case "ArrowRight":
//             right = true
//             break
//         case "ArrowLeft":
//             left = true
//             break
//         case "ArrowUp":
//             up = true
//             break
//         case "ArrowDown":
//             down = true
//             break
//     }
// })





//___________________animation loop ___________________

// function cycle(){
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//   requestAnimationFrame(cycle);
// }
// requestAnimationFrame(cycle);
