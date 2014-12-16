var el = document.getElementById("main"),
    two = new Two({
        fullscreen: true
    });

two.appendTo(el);

//TIME IS A FLAT CIRCLE
var circle = two.makeCircle(300,300,200); // (X, Y, Radius)
circle.fill = "blue"; // or hex colors!

two.update();
//this has to be called every time I want to change the drawing enviroment


//RECTANGLE
var rectangle = two.makeRectangle(400,180, 130, 320); // (X, Y, Width, Height)
rectangle.fill = "orange"; // duh
rectangle.opacity = 0.7; // 1 = solid, 0 = transparent.
rectangle.noStroke(); //stroke is a border



//AMAZING LINES
var line = two.makeLine(300, 300, 600, 600); // (Beginning X, Y, Ending X, Y)
line.linewidth = 12;
line.stroke = "green";



//POLYGONS
var poly = two.makePolygon(110, 100, 120, 50, 140, 150, 160, 50, 180, 150, 190, 100);
//each pair of numbers are XY coordinates of a point on the shape.
poly.linewidth = 4;
poly.translation = new Two.Vector(60, 60);
poly.stroke = "#cccccc";
poly.fill = "#ececec";




//CURVES
var curve = two.makeCurve(110, 100, 120, 50, 140, 150, 160, 50, 180, 150, 190, 100,
  true); // <--- WHAT IS THIS?!
curve.linewidth = 4; // line thickness
curve.scale = 1; //change this
curve.rotation = Math.PI / 2; // Quarter-turn
curve.fill = "brown";
curve.noFill(); //what happens if I disable?




