
var rpio = require('rpio')

var lights = [7, 11, 12, 15, 16, 18, 13, 22]

for (i = 0; i < lights.length; i++) {
  rpio.setOutput(lights[i]);
};

setInterval(function()
{
  randomOne = Math.floor((Math.random()*lights.length)); 
  randomTwo = Math.floor((Math.random()*lights.length));

  rpio.write(lights[randomOne], rpio.HIGH);
  rpio.write(lights[randomTwo], rpio.LOW);
  	   
},30);
