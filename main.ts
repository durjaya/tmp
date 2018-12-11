
//% weight=99 color=#0fbc11 icon="\uf0e4" block="Power Functions"
namespace powerfunctions {

    let FACTOR = 1

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
          control.waitMicros(d * FACTOR);
    }

   

//% blockId=stop
//% block="stop"
//% weight=60
export function stop() {

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

//% blockId=dance
//% block="dance"
//% weight=60
export function dance(){
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

//% blockId=volumePlus
//% block="volumePlus"
//% weight=60
export function volumePlus(){
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

//% blockId=volumeSub
//% block="volumeSub"
//% weight=60
export function volumeSub(){
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

//% blockId=moveForward
//% block="moveForward"
//% weight=60
export function moveForward(){
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

//% blockId=moveBack
//% block="moveBack"
//% weight=60
export function moveBack(){
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

//% blockId=lookLeft
//% block="lookLeft"
//% weight=60
export function lookLeft(){
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

//% blockId=lookRight
//% block="lookRight"
//% weight=60
export function lookRight(){
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

//% blockId=slipForward
//% block="slipForward"
//% weight=60
export function slipForward(){
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

//% blockId=slipBack
//% block="slipBack"
//% weight=60
export function slipBack(){
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

//% blockId=turnLeft
//% block="turnLeft"
//% weight=60
export function turnLeft(){
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

//% blockId=turnRight
//% block="turnRight"
//% weight=60
export function turnRight(){
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

//% blockId=math
//% block="math"
//% weight=60
export function math(){
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

//% blockId=science
//% block="science"
//% weight=60
export function science(){
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

//% blockId=english
//% block="english"
//% weight=60
export function english(){
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

//% blockId=voiceControl
//% block="voiceControl"
//% weight=60
export function voiceControl(){
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

//% blockId=programming
//% block="programming"
//% weight=60
export function programming(){
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

//% blockId=energeTransform
//% block="energeTransform"
//% weight=60
export function energeTransform(){
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

//% blockId=musicradio
//% block="musicradio"
//% weight=60
export function musicradio(){
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





}