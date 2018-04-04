// ***** Global variables ***** //
var FARTable;
var topY = 50;
var bottomY = 500;
var leftX = 50;
var rightX = 700;
var textLeft = 30;
var tableofFAR = new p5.Table;

// ***** Preload function ***** //
function preload(){
  yearVsFar = loadTable('data/yearVsFar.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(1000, 800);
  textSize(12);
  textFont('Roboto');
  console.log('Setup complete...');
  print(FARTable.getRowCount() + ' rows loaded...');
  print(FARTable.getColumnCount() + ' columns loaded...');
  noLoop();
  createNewTable();
}

background(84);
 // fill(255);
// Draw horizontal lines and the y axis
 for (var i = 0; i < 24; i++){
   noStroke();
   textAlign(RIGHT, CENTER);
   text(round(map(i, 0, 23, 1900, 2015)), textLeft, map(i, 0, 23, bottomY, topY));
   stroke(70);
   line(textLeft + 10, map(i, 0, 23, bottomY, topY), rightX + 10, map(i, 0, 23, bottomY, topY));

}
   noStroke();


  // Draw vertical lines and the x axis
  for (var i = 0; i < 15; i++) {
    textAlign(CENTER, TOP);
    text(round(map(i, 0, 8, 0, 30)), map(i, 0, 8, leftX, rightX), bottomY + 5);
    stroke(70);
    line(map(i, 0, 8, 40, 1010), topY , map(i, 0, 8, 40, 1010), bottomY);
  }
