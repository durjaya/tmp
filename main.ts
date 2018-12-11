
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

  

    /**
     * Set speed of a motor.
     */
    //% blockId=powerfunctions_set_speed
    //% block="2set"
    //% weight=60
    export function setSpeed() {
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

    /**
     * Set speed of a motor.
     */
    //% blockId=xxx
    //% block="3set"
    //% weight=60
    export function setStop() {
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



}