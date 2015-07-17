var locs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  var res = 20;
  var countX = ceil(width/res) + 1; //x positions
  var countY = ceil(height/res) + 1; //y positions

  for (var j = 0; j < countY; j++) {
    for (var i = 0; i < countX; i++) {
      locs.push( new p5.Vector(res*i, res*j) );
    }
  };

  noFill();
  stroke(128,128,128);
}

function draw() {
  background(30,30,30);
  for (var i = locs.length - 1; i >= 0; i--) {
    var h = calcVec( locs[i].x - mouseX, locs[i].y - mouseY);
    line(
      locs[i].x,
      locs[i].y,
      locs[i].x + 10*cos(h.heading()),
      locs[i].y + 10*sin(h.heading())
    );
  };
}

function calcVec(x, y) {
  return new p5.Vector(y - x, - x - y);
}
