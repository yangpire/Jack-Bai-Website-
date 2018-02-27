// Setup function
console.log('blah blah');

function setup(){
  createCanvas(500, 500);
  colorMode(HSB, 100);
  background(0,0,100);
  print('setup complete...')
}

 //Draw function

function draw(){
  background(0,0,100);
  for (var i = 0; i < 50; i++) {
    for (var j = 0; j < 50; j++) {
      rect(i*10,-10+(j*10),10,10);
      fill(i*2, j*2, 100);
      noStroke();
          }
        }
      }
