var serial;
var portName = '/dev/cu.usbmodem1411';  // fill in your serial port name here
var key1;
var key1_switch = 0;


function preload(){
note1 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509240029/marvingaye_t8qqdz.mp3")


}

function setup() {
 createCanvas(700, 300);
 serial = new p5.SerialPort();    // make a new instance of the serialport library
 serial.on('list', printList);    // set a callback function for the serialport list event
 serial.on('data', serialEvent);    // callback for when new data arrives
 amplitude = new p5.Amplitude();
 
 // change the data rate to whatever you wish
 var options = {baudrate: 9600};
 serial.open(portName, options);
 
}


function draw() {
 background(0);
  fill(255);
  var level = amplitude.getLevel();
  var millisecond = millis();
  var color = millisecond%700;
  var size = map(level, 0, 1, 0, 700);
 // ellipse(color, height/2, size, size)
  
  
   push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / 20);
  star(0, 0, size/3, size/7, 7); 
  pop();
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 20);
  star(0, 0, size/3, size/7, 7); 
  pop();
  
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / 20);
  star(0, 0, size/3, size/7, 7);  
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);


  
      
    

// Piano Key Logic - Middle C, D, E, F, G, A, B

      if (key1>300 && key1_switch == 0) {    
         note1.play();
         key1_switch = 1;
        }

      if (key1 <300 && key1_switch == 1){
        key1_switch = 2;
      }
      if (key1 >300 && key1_switch == 2){
         note1.stop();
         key1_switch = 3;

      }if (key1 <300 && key1_switch ==3){
        note1.stop();
        key1_switch = 0;
      }



 
}

function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  var inString = serial.readStringUntil('\r\n');
    // text("sensor values: " + inString, 30, 30);
  //check to see that there's actually a string there:
  if (inString.length > 0 ) {
    var sensors = split(inString, ',');            // split the string on the commas
    if (sensors.length > 6) {  
      key1 = sensors[0]



   /*   key1 = map(sensors[0], 0, 1023, 0, 255);   // element 0 is the locH
      key2 = map(sensors[1], 0, 1023, 0, 255);
      key3 = map(sensors[2], 0, 1023, 0, 255) ;// element 1 is the locV
   */  
      
    }
  }
}


// print list of ports for debugging
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
  print(i + " " + portList[i]);
   }
}