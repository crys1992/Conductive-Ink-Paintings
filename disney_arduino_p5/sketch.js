var serial;
var portName = '/dev/cu.usbmodem1411';  // fill in your serial port name here
var key1;
var key2;
var key3;
var key4;
var key5;
var key6;
var key7;
var keyx;
var keyy;
var key1_switch = 1;
var key2_switch = 1; 
var key3_switch = 1;
var key4_switch = 1;
var key5_switch = 1; 
var key6_switch = 1;
var key7_switch = 1; 
var keyx_switch = 1; 
var keyy_switch = 1;
var tempo = 0; 
var whatever1 = 0;
var whatever2 = 0;
var whatever3 = 0;
var whatever4 = 0;
var whatever5 = 0;
var whatever6 = 0;
var whatever7 = 0;



function preload(){
note1 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509315808/snowwhite_dlfo6q.wav")
note2 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509329109/cinderella_eyczyr.wav")
note3 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509364289/ariel_snmpjz.wav")
note4 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509331087/belle_u7r4mf.wav")
note5 = loadSound ("http://res.cloudinary.com/cwang12/video/upload/v1509362474/jasmine_grusju.wav")
note6 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509362069/anna_qeg6eh.wav")
cover = loadImage("http://res.cloudinary.com/cwang12/image/upload/v1509365776/disneystart_yy2e2a.png")
//note7 = loadSound("http://res.cloudinary.com/cwang12/video/upload/v1509054308/B_Note_lxwhfd.wav")

}



function setup() {
 createCanvas(0, 0);
 serial = new p5.SerialPort();    // make a new instance of the serialport library
 serial.on('list', printList);    // set a callback function for the serialport list event
 serial.on('data', serialEvent);    // callback for when new data arrives
 
 // change the data rate to whatever you wish
 var options = {baudrate: 9600};
 serial.open(portName, options);
 
}


function draw() {
  background(0);


if (whatever7 == 0){
mainpage = createImg("https://media.giphy.com/media/l1J9P9NOceNXnLMyI/giphy.gif");
}
whatever7++;
    

// Key Logic 

      if (key1>300 && key1_switch == 1) { 
          removeElements();
          note2.pause();
          note3.pause();
          note4.pause();
          note5.pause();
          note6.pause();  
         if (whatever1%50 == 0){
         note1.play();
       }
        whatever1++;
        img1 = createImg("http://24.media.tumblr.com/6073fe6881d2103d124592dda40ff6d7/tumblr_mjm7cqNb5V1qa70eyo1_r1_500.gif");
     

        }
      if (key2>300 && key2_switch == 1) {
          removeElements();
          note1.pause();
          note3.pause();
          note4.pause();
          note5.pause();
          note6.pause();
          if (whatever2%50 == 0){
         note2.play();
       }
         whatever2++;
          img2 = createImg("http://www.lovethispic.com/uploaded_images/92733-Cinderella-In-Her-Gown.gif?1");
        


        }
      if (key3>300 && key3_switch == 1) { 
          removeElements();
          note1.pause();
          note2.pause();
          note4.pause();
          note5.pause();
          note6.pause();
          if (whatever3%50 == 0){
          note3.play();
        }
          whatever3++;
          img3 = createImg("https://media.giphy.com/media/l0IsGKcAFwWmEvZAc/giphy.gif")

        }
      if (key4>300 && key4_switch == 1) { 
          removeElements();
          note1.pause();
          note2.pause();
          note3.pause();
          note5.pause();
          note6.pause();
          if (whatever4%50 == 0){
          note4.play();
        }
          whatever4++;
          img4 = createImg("https://media.giphy.com/media/xT9IgmvAEzkW6fRXkQ/giphy.gif")

        }
      if (key5>300 && key5_switch == 1) { 
          removeElements();
          note1.pause();
          note2.pause();
          note3.pause();
          note4.pause();
          note6.pause();
          if (whatever5%50 == 0){
          note5.play();
        }
          whatever5++;
          img5 = createImg("https://media.giphy.com/media/l378vTHnEx9DrbkqI/giphy.gif");
          key5_switch = 0;
        }
      if (key6>300 && key6_switch == 1) { 
          removeElements();
          note1.pause();
          note2.pause();
          note3.pause();
          note4.pause();
          note5.pause();
          if (whatever6%50 == 0){
          note6.play();
        }
          whatever6++;
          img5 = createImg("https://media.giphy.com/media/3ohhwu9bo04khJ881O/giphy.gif");

            //https://media.giphy.com/media/l378keVcDqxYbeAXC/giphy.gif")
   
        }

 /*     if (key1 <299 && key1_switch == 0){
        key1_switch = 2;
      }

      if (key1 > 300 && key1_switch == 2){
         removeElements();
         note1.pause();
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
*/

 
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
      keyx = sensors[7]
      keyy = sensors[8]
      


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