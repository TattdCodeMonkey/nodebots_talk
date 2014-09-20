var five = require('johnny-five');
var pin = 3;

var board = new five.Board();

board.on("ready", function(){
    console.log("board ready");
    //set pin to High - turn led on
    // var led = new five.Pin(pin);
    // led.write(1);

    //use Pin module to blink light on and off
    // var led, state;
    //
    // led = new five.Pin(pin);
    //
    // this.loop(500, function(){
    //   led.write(state ^= 0x01);
    // });

    // use Led module
    led = new five.Led(pin);

    // led.on();
    // led.off();
    // led.toggle();
    //led.pulse();
    // led.blink();
     led.blink(500); //500ms intervals
    //led.brightness(128); //0 - 255 : 0 = off, 255 = on / full brightness
});
