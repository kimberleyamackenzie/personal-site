// var ctx = document.getElementById("name").getContext("2d"),
//     dashLen = 120, dashOffset = dashLen, speed = 8,
//     txt = "Kimberley Mackenzie", x = 0, i = 0;

// ctx.font = "100px Sacramento, cursive, sans-serif"; 
// ctx.lineWidth = .25; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
// // ctx.strokeStyle = ctx.fillStyle = "#1f2f90";

// (function loop() {
// //   ctx.clearRect(x, 0, 60, 150);
//   ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
//   dashOffset -= speed;                                         // reduce dash length
//   ctx.strokeText(txt[i], x, 90);             
// //   ctx.strokeText(txt[i], x + 3, 87);                               // stroke letter
//   // stroke letter

//   if (dashOffset > 0) requestAnimationFrame(loop);             // animate
//   else {
//     // ctx.fillText(txt[i], x, 90);                               // fill final letter
//     dashOffset = dashLen;                                      // prep next char
//     x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
//     ctx.setTransform(1, 0, 0, 1, 0, 6 * Math.random());        // random y-delta
//     ctx.rotate(Math.random() * 0.005);                         // random rotation
//     if (i < txt.length) requestAnimationFrame(loop);
//   }
// })();
