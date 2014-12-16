var el = document.getElementById("main"),
    two = new Two({
        fullscreen: true
    }).appendTo(el);

var earthAngle = 0,
    moonAngle  = 0,
    distance   = 30,  // from earth to moon
    radius     = 50,  // earth size
    padding    = 100, // how much empty space our planet orbits around
    orbit      = 200, // radius of our orbit
    offset     = orbit + padding, // how far from edge of page we are drawing
    orbits     = two.makeGroup(); // madness



var earthOrbit = two.makeCircle(offset, offset, orbit);
earthOrbit.noFill();
earthOrbit.linewidth = 4;
earthOrbit.stroke = "#ccc";
orbits.add(earthOrbit); // add the earthOrbit to the group of orbit lines.

two.update();


//there's math here and I blacked out.
function getPositions(angle, orbit) {
    return {
        x: Math.cos(angle * Math.PI / 180) * orbit,
        y: Math.sin(angle * Math.PI / 180) * orbit
    };
}

//CREATE EARTH
var pos = getPositions(earthAngle++, orbit),
    earth = two.makeCircle(pos.x + offset, pos.y + offset, radius);
    //we get pos.x and pos.y from setting pos to the result of getPositions()
    //use those coords to create a circle.

earth.stroke = "#123456"; //EarthStroke is probably just the worst prog rock band ever
earth.linewidth = 4;
earth.fill = "#194878";



//CREATE MOOOON.
var moonOrbit = two.makeCircle(earth.translation.x, earth.translation.y, radius + distance);
moonOrbit.noFill();
moonOrbit.linewidth = 4;
moonOrbit.stroke = "#ccc";
orbits.add(moonOrbit);

var pos = getPositions(moonAngle, radius + distance),
    moon = two.makeCircle(earth.translation.x + pos.x, earth.translation.y + pos.y, radius / 4);
    //earth.translation.x is the x-coordinate of the center of Earth circle

moonAngle += 5; //rotate 5x faster than earth
moon.fill = "#474747";



two.bind("update", function (frameCount) {
//every time two.update() would occur, have this callback function happen
    var pos = getPositions(earthAngle++, orbit);
    //increment the angle of earth relative to the orbit
    earth.translation.x = pos.x + offset;
    earth.translation.y = pos.y + offset;
    //do some magic.

    var moonPos = getPositions(moonAngle, radius + distance);
    moon.translation.x = earth.translation.x + moonPos.x;
    moon.translation.y = earth.translation.y + moonPos.y;
    moonAngle += 5;

    moonOrbit.translation.x = earth.translation.x;
    moonOrbit.translation.y = earth.translation.y;
});

two.play();
//update repeatedly, forever.


