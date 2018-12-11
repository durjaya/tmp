/**
 * Power Functions IR Sender
 * Control your Power Functions motors using your micro:bit or Calliope-Mini, an infrared LED and MakeCode.
 *
 * (c) 2017-2018, Philipp Henkel
 */

/* Board specific configuration */
//% weight=99 color=#0fbc11 icon="\uf0e4" block="Power Functions"
namespace powerfunctions {


    /**
     * Set speed of a motor.
     */
    //% blockId=powerfunctions_set_speed
    //% block="33set "  
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
    }



}
