var serial;
var portName = '/dev/cu.usbmodem1411';  // fill in your serial port name here
var key1;
var key2;
var key3;
var key4;
var key5;
var key6;
var key7;
var key1_switch = 1;
var key2_switch = 1; 
var key3_switch = 1;
var key4_switch = 1;
var key5_switch = 1; 
var key6_switch = 1;
var key7_switch = 1; 



function preload(){
note1 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509052867/C_Note_ud0m9x.wav")
note2 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509053628/D_Note_lkfpgo.wav")
note3 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509053632/E_Note_ltpdel.wav")
note4 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509053631/F_Note_vvq1dd.wav")
note5 = loadSound ("http://res.cloudinary.com/cwang12/video/upload/v1509053631/G_Note_aemuuc.wav")
note6 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509054308/A_Note_gxzowp.wav")
note7 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509054308/B_Note_lxwhfd.wav")
Chopin = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1507486604/Fantaisie-Impromptu_Opus_66_-_Frederic_Chopin_a5tn78.mp3")
Mario = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1507486591/Mario_e2i9pq.mp3")
Debussy = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1507486600/Debussy_nkpgo3.mp3")
}



function setup() {
 createCanvas(800, 400);
 serial = new p5.SerialPort();    // make a new instance of the serialport library
 serial.on('list', printList);    // set a callback function for the serialport list event
 serial.on('data', serialEvent);    // callback for when new data arrives
 
 // change the data rate to whatever you wish
 var options = {baudrate: 9600};
 serial.open(portName, options);
 
}


function draw() {
  background(0);


  

  fill(255,0,0,100);
  rect(0, height/2, key1/100, key1/4);
  fill(255,127,0,100);
  rect(100, height/2, key2/100, key2/4);
  fill(0,0,255,100);
  rect(200, height/2, key3/100, key3/4);
  
  
      if (key1>300 && key1_switch == 1) {    
         note1.play();
         key1_switch = 0;
        }
      if (key2>300 && key2_switch == 1) {
          note2.play();
          key2_switch = 0;
        }
      if (key3>300 && key3_switch == 1) { 
          note3.play();
          key3_switch = 0;
        }
      if (key4>300 && key4_switch == 1) { 
          note4.play();
          key4_switch = 0;
        }
      if (key5>300 && key5_switch == 1) { 
          note5.play();
          key5_switch = 0;
        }
      if (key6>300 && key6_switch == 1) { 
          note6.play();
          key6_switch = 0;
        }
      if (key7>300 && key7_switch == 1) { 
          note7.play();
          key7_switch = 0;
        }
      if (key1 <299 && key1_switch == 0){
        key1_switch = 1;
      }
      if (key2 < 299 && key2_switch == 0){
        key2_switch = 1;
      }
      if (key3 < 299 && key3_switch == 0){
        key3_switch = 1;
      }
      if (key4 < 299 && key4_switch == 0) {
        key4_switch = 1;
      }
      if (key5 < 299 && key5_switch == 0){
        key5_switch = 1;
      }
      if (key6 < 299 && key6_switch == 0){
        key6_switch = 1;
      }
     if (key7 < 299 && key7_switch == 0){
       key7_switch = 1;
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
      key2 = sensors[1]
      key3 = sensors[2]
      key4 = sensors[3]
      key5 = sensors[4]
      key6 = sensors[5]
      key7 = sensors[6]
      


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