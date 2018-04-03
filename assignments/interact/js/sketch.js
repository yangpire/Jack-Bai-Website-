// ***** Global variables ***** //
var yearVsFar;
var topY = 50;
var bottomY = 800;
var leftX = 50;
var rightX = 1000;
var textLeft = 30;
var delay;

// ***** Preload function ***** /

function preload(){
  yearVsFar = loadTable('data/yearVsFar.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** setup function***** //
function setup(){
  createCanvas(1100, 900);
  textSize(12);
  textFont('Roboto');
  print(yearVsFar.getRowCount() + ' rows loaded...');
  print(yearVsFar.getColumnCount() + ' columns loaded...');
  colorMode(HSB, 100);
  noLoop();

  background(255);
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
 }


  function drawGraph(column){
    for (var i = 0; i < yearVsFar.getRowCount(); i++) {

    // Read per row the numFar and yearbuilt

    var numfar = parseFloat(yearsVsFar.getString(i, 'YearBuilt'));
    var year;
    if (column==0) {
      year = parseFloat(yearsVsFar.getString(i, 'BuiltFAR'));
      fill(100,250,212);
    }
    if (column==1) {
      year = parseFloat(yearsVsFar.getString(i, 'ResidFAR'));
      fill(50,112,77);
    }
    if (column==2) {
      year = parseFloat(yearsVsFar.getString(i, 'CommFAR'));
      fill(150,123,24);
    }
    if (column==3) {
      year = parseFloat(yearsVsFar.getString(i, 'FacilFAR'));
      fill(150,123,24);
    }

}

// If year is less than 1900 or numfloor is greater is 10
 if ((year < 1900) || (numFar > 10) || (year > 2014))  {
   continue;
 }
 // map each FAR between leftX and rightX
 numFar = map(numFar, 0, 10, leftX, rightX);
 // map each yearbuilt between bottomY and topY
 year = map(year, 1900, 2014, bottomY, topY);
 noStroke();
 ellipse(numFar, year, 4, 4);
}


// ** Draw function ** //
function draw(){
    drawGraph(0);
  drawGraph(1);
  drawGraph(2);
  drawGraph(3);

}
