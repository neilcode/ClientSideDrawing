  var a_canvas = document.getElementById("a");

$(window).on('click', draw_a)
$(window).on('keypress', draw_lines)


function draw_a() {
  a_canvas.width = a_canvas.width
  var a_context = a_canvas.getContext("2d");
  a_context.fillRect(50, 25, 150, 100);

}

 // draw_a();

function draw_lines() {
  a_canvas.width = a_canvas.width

var context = a_canvas.getContext("2d");
for (var x = 0.5; x < 500; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, 375);
}

for (var y = 0.5; y < 375; y += 10) {
  context.moveTo(0, y);
  context.lineTo(500, y);
}

context.stroke();

}

// draw_lines();

