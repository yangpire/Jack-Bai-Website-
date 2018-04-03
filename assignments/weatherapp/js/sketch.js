// **** Global Variables ***** //
var apiKey = '8ea3476b9b1b352e1270df0887105e17';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var weatherData;

// **** Preload Function **** //
function preload(){
  var request = baseURL + 'New York' + '&apikey=' + apiKey;
  weatherData = loadJSON(request);
  print(weatherData);
}

// **** Setup Function ****** //
function setup(){
  createCanvas(800, 800);
  noLoop();
}

function draw(){
  background(225);
  var description = weatherData.weather[0].description;
  var temperature = weatherData.main.temp;
  var humidity = weatherData.main.humidity;
  var pressure = weatherData.main.pressure;
  text('The current weather for New York City is:', 50, 50);
  text(description, 80, 70);
  text(temperature + ' F', 80, 90);
  text(humidity + '% humidity', 80, 110);
  text(pressure + ' hPa (pressure)', 80, 130);
}
