// **** Global Variables ***** //
var apiKey = '8ea3476b9b1b352e1270df0887105e17';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var weatherData;
var button;
var cityInput;
var description = '';
var temperature = 0;
var tempMax = 0;
var tempMin = 0;
var humidity = 0;
var pressure = 0;

// **** Setup Function ****** //
function setup(){
  createCanvas(800, 800);
  button = select('#submit');
  cityInput = select('#city');
  button.mousePressed(queryAPI);
  noLoop();
}

// **** Query API Function *** //
function queryAPI(){
  var request = baseURL + cityInput.value() + '&apikey=' + apiKey;
  loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  description = weatherData.weather[0].main;
  temperature = weatherData.main.temp;
  tempMax = weatherData.main.temp_max;
  tempMin = weatherData.main.temp_min;
  humidity = weatherData.main.humidity;
  wind = weatherData.wind.speed;
  print(weatherData);
  redraw();
}


// **** Draw Function **** //
function draw(){
  var drawTemp = round(temperature * (9/5) - 459.67);
  var drawTempMax = round(tempMax * (9/5) - 459.67);
  var drawTemMin = round(tempMin * (9/5) - 459.67);
  var drawwind = wind;

background (255);

  if (drawTemp < 100){
    background (255);

  fill('#833B00')
  noStroke();
  rect(300, 90, 200, 200);

  }

  if (drawTemp < 70){
    background (255);

  fill('#FF9450')
  noStroke();
  rect(300, 90, 200, 200);

  }

  if (drawTemp < 50){
    background (255);

  fill('#CF9976')
  noStroke();
  rect(300, 90, 200, 200);

  }

  if (drawTemp < 32){
    background (255);

  fill('#6BC8CF')
  noStroke();
  ellipse( 400, 170, 200, 200);

  }

  if (drawTemp < 0){
    background (255);

  fill('#157F83')
  noStroke();
  ellipse( 400, 170, 200, 200);

  }




  if (weatherData){
  fill(0);
	textAlign(CENTER);
	textSize(18);
  textFont('Encode Sans');


  text(cityInput.value(), 400, 40);
	textSize(18);
    text(description, 400, 120);
	textAlign(LEFT);
	textFont('Encode Sans');
	textStyle(BOLD);
	textSize(84);
    text(drawTemp + ' F', 325, 200);
	textStyle (NORMAL);
	textFont('Encode Sans');
	textSize(14);
	textAlign(CENTER);
	textSize(14);
	text(drawTempMax + ' F', 420, 230);
	text(drawTemMin + ' F  / ', 380, 230);
	textStyle (NORMAL);
    text('Wind: ' + wind + ' mph', 740, 510);
	fill(0);

  }
}
