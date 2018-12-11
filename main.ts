/**
 * Power Functions IR Sender
 * Control your Power Functions motors using your micro:bit or Calliope-Mini, an infrared LED and MakeCode.
 *  https://github.com/durjaya/LegoControl
 * (c) 2017-2018, Philipp Henkel
 */

/* Board specific configuration */
//% weight=99 color=#0fbc11 icon="\uf0e4" block="Power Functions"


namespace powerfunctions {


    /**
     * Set speed of a motor.
     */
    //% blockId=powerfunctions_set_speed
<<<<<<< HEAD
    //% block="1set "  
=======
    //% block="11set | motor %motor | to %speed"
    //% speed.min=-7 speed.max=7
>>>>>>> parent of be6fbec... Update main.ts
    //% weight=60
    export function setSpeed() {
        let x = 1
    }



    
    namespace transport {

        const IR_MARK = 6 * 1000000 / 38000
        const START_STOP_PAUSE = 39 * 1000000 / 38000
        const LOW_PAUSE = 10 * 1000000 / 38000
        const HIGH_PAUSE = 21 * 1000000 / 38000

        export class InfraredDevice {
            
        }

        let FACTOR = 1

        

        export function sendMessage(message: number, device: InfraredDevice): void {
            let i = 1
        }

        function ledOn(d: number) {
            let r = d * FACTOR;
            while (r > 26) {
                
                r = r - 26;
            }
        }
        
        
        function ledOff(d: number) {
            value =d 
        }
    }


    export function runTests() {

        {
            let a = 1
        }

        
    }
<<<<<<< HEAD
=======


    export function runTests() {

        {
            let a = 1
        }

        
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 55ada53... Update main.ts
=======
>>>>>>> parent of 55ada53... Update main.ts
=======
>>>>>>> parent of 55ada53... Update main.ts
}
