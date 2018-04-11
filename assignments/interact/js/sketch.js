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
  textSize(16);
  textFont('Roboto');
  console.log('Setup complete...');
  print(yearVsFar.getRowCount() + ' rows loaded...');
  print(yearVsFar.getColumnCount() + ' columns loaded...');
  colorMode(HSB, 255);
  noLoop();
}

 // Draw horizontal lines and the y axis
function draw(){
  background(255);
  // fill(255);
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
     text(round(map(i, 0, 8, 0, 50)), map(i, 0, 8, leftX, rightX), bottomY + 5);
     stroke(70);
     line(map(i, 0, 8, 40, 1010), topY , map(i, 0, 8, 40, 1010), bottomY);
   }

   //draw dots

   for(var i = 0; i < yearVsFar.getRowCount(); i++){
    push();
     var BuiltFarColumn = yearVsFar.getNum(i, 'BuiltFAR');
     var ResidFarColumn = yearVsFar.getNum(i, 'ResidFAR');
     var CommFarColumn = yearVsFar.getNum(i,'CommFAR');
     var FacilFarColumn = yearVsFar.getNum(i,'FacilFAR');
     var YearOfData = yearVsFar.getNum(i,'YearBuilt')
     var yearPosition = map(YearOfData,1900,2015, bottomY,topY);
     var BuiltFarPosition = map(BuiltFarColumn,0,25,leftX,rightX)
     var ResidFarPosition = map(ResidFarColumn,0,25,leftX,rightX)
     var CommFarPosition = map(CommFarColumn,0,50,leftX,rightX)
     var FacilFarPosition = map(FacilFarColumn,0,50,leftX,rightX)

}

      // If year is less than 1900 or numFAR is greater is 10
      if (YearOfData >= 1900 ) {
       // map each FAR between leftX and rightX
       var numBuiltFar = BuiltFarPosition
       var numResidFar = ResidFarPosition
       var numCommFar = CommFarPosition
       var numFacilFar = FacilFarPosition
       // map each yearbuilt between bottomY and topY
       var YearOfData = map(YearOfData, 1900, 2014, bottomY, topY);

  fill('#949494');
  if (mouseX < numResidFar){
    console.log(mouseX)
    fill('#CFB276');
  //ellipse(numResidFar, YearOfData, 8, 8);
  }
  ellipse(numBuiltFar, YearOfData, 6, 6);
  noStroke();
  pop();
/*  if (mouseX < numBuiltFar){
  fill('#1C4C56');
  ellipse(numBuiltFar, YearOfData, 8, 8);
}


fill('#949494');
ellipse(numResidFar, YearOfData, 6, 6);


fill('#949494');
ellipse(numCommFar, YearOfData,6 ,6);
if (mouseX < numCommFar){
  fill('#6B0803');
  ellipse(numCommFar, YearOfData, 8, 8);
}


fill('#949494');
ellipse(numFacilFar, YearOfData,6 ,6);
if (mouseX === numFacilFar){
  fill('#B95F21');
    ellipse(numFacilFar, YearOfData, 8, 8);
}
*/


    }
  }
