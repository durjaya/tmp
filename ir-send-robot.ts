// slow down factor for demo, at about 100 or 200 times slower
let FACTOR = 1
let value  = 0

function ledOn(d: number) {
    let r = d * FACTOR;
    while (r > 26) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P1, 0)
        r = r - 26;
    }
}




function ledOff(d: number) {
    value =d 
    control.waitMicros(d * FACTOR);
}


// Stop
function stop() {

    //1
    ledOn(6000);
    //2
    ledOff(600);
    //3
    ledOn(600);
    //4
    ledOff(1500);
    //5
    ledOn(1500);
    //6
    ledOff(600);
    //7
    ledOn(1500);
    //8
    ledOff(600);
    //9
    ledOn(1500);
    //10
    ledOff(600);
    //11
    ledOn(600);
    //12
    ledOff(1500);
    //13
    ledOn(1500);
    //14
    ledOff(600);
    //15
    ledOn(1500);
    //16
    ledOff(600);
    //17
    ledOn(1500);
}

//Dance
function dance(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
}

function volumePlus(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500); 
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500); 
    ledOn(600);
    ledOff(1500); 
    ledOn(1500);
    ledOff(600);
    ledOn(600);
}

function volumeSub(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500); 
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500); 
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500); 
    ledOn(600);
}

function moveForward(){
    ledOn(6000);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
}

function moveBack(){
    ledOn(6000);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
}

function lookLeft(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
}

function lookRight(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
}

function slipForward(){
    ledOn(6000);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
}

function slipBack(){
    ledOn(6000);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
}

function turnLeft(){
    ledOn(6000);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
}

function turnRight(){
    ledOn(5950);
    ledOff(500);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
}

function math(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
}

function science(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
}

function english(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
}

function voiceControl(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
}

function programming(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
}

function energeTransform(){
    ledOn(6000);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
}

function musicradio(){
    ledOn(5950);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
    ledOff(600);
    ledOn(1500);
    ledOff(600);
    ledOn(600);
    ledOff(1500);
    ledOn(600);
    ledOff(1500);
    ledOn(1500);
}



// Button A sends code
input.onButtonPressed(Button.A, () => {
    stop();
})

// Button A sends code
input.onButtonPressed(Button.A, () => {
    musicradio();
})

basic.forever(function () {
    serial.writeValue("x", value)
})
