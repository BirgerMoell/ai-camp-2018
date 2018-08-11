function setup() {
    createCanvas(1200, 1200);
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  function draw() {
    if (mouseIsPressed) {
      fill(getRandomColor());
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
