/**
 * Power Functions IR Sender
 * Control your Power Functions motors using your micro:bit or Calliope-Mini, an infrared LED and MakeCode.
 *
 * (c) 2017-2018, Philipp Henkel
 */

/* Board specific configuration */
namespace BoardConfig {
    export const DefaultPin = AnalogPin.P1;
    export const MarkTimingCorrectionMicroSeconds = -65;
    export const PauseTimingCorrectionMicroSeconds = -150;
}

enum PowerFunctionsChannel {
    //% block="1"
    One = 0,
    //% block="2"
    Two = 1,
    //% block="3"
    Three = 2,
    //% block="4"
    Four = 3
}

enum PowerFunctionsDirection {
    //% block="forward"
    Forward = 1,
    //% block="backward"
    Backward = -1
}

enum PowerFunctionsOutput {
    //% block="red"
    Red = 0,
    //% block="blue"
    Blue = 1
}

enum PowerFunctionsMotor {
    //% block="red | channel 1"
    Red1 = 0,
    //% block="red | channel 2"
    Red2 = 1,
    //% block="red | channel 3"
    Red3 = 2,
    //% block="red | channel 4"
    Red4 = 3,
    //% block="blue | channel 1"
    Blue1 = 4,
    //% block="blue | channel 2"
    Blue2 = 5,
    //% block="blue | channel 3"
    Blue3 = 6,
    //% block="blue | channel 4"
    Blue4 = 7
}

enum PowerFunctionsCommand {
    //% block="float"
    Float = 0,
    //% block="forward"
    Forward = 1,
    //% block="backward"
    Backward = 2,
    //% block="brake"
    Brake = 3
}

//% weight=99 color=#0fbc11 icon="\uf0e4" block="Power Functions"
namespace powerfunctions {

    let motorDirections = [
        PowerFunctionsDirection.Forward,
        PowerFunctionsDirection.Forward,
        PowerFunctionsDirection.Forward,
        PowerFunctionsDirection.Forward,
        PowerFunctionsDirection.Forward,
        PowerFunctionsDirection.Forward,
        PowerFunctionsDirection.Forward,
        PowerFunctionsDirection.Forward,
    ]

    let irLed = BoardConfig.DefaultPin;
    let markTimingCorrectionMicroSeconds = BoardConfig.MarkTimingCorrectionMicroSeconds;
    let pauseTimingCorrectionMicroSeconds = BoardConfig.PauseTimingCorrectionMicroSeconds;
    
    function getChannel(motor: PowerFunctionsMotor): PowerFunctionsChannel {
        const MOTOR_TO_CHANNEL = [
            PowerFunctionsChannel.One, PowerFunctionsChannel.Two, PowerFunctionsChannel.Three, PowerFunctionsChannel.Four,
            PowerFunctionsChannel.One, PowerFunctionsChannel.Two, PowerFunctionsChannel.Three, PowerFunctionsChannel.Four
        ]
        return MOTOR_TO_CHANNEL[motor]
    }

    function getOutput(motor: PowerFunctionsMotor): PowerFunctionsOutput {
        const MOTOR_TO_OUTPUT = [
            PowerFunctionsOutput.Red, PowerFunctionsOutput.Red, PowerFunctionsOutput.Red, PowerFunctionsOutput.Red,
            PowerFunctionsOutput.Blue, PowerFunctionsOutput.Blue, PowerFunctionsOutput.Blue, PowerFunctionsOutput.Blue
        ]
        return MOTOR_TO_OUTPUT[motor]
    }

    function sendSingleOutputCommand(pin: AnalogPin, channel: PowerFunctionsChannel, output: PowerFunctionsOutput, speed: number) {
        control.inBackground(() => {
            const irDevice = new transport.InfraredDevice()
            const msg = message.createSingleOutputPwmMessage(channel, output, speed)
            transport.sendMessage(msg, irDevice)
        })
    }

    function test(){
        let x =1 
    }


    /**
     * Set speed of a motor.
     */
    //% blockId=powerfunctions_set_speed
    //% block="11set"
    //% weight=60
    export function setSpeed() {
        let a = 1
        test()
    }

    namespace message {

        function mapValueToPwmElseFloat(value: number): number {
            switch (value) {
                case 7: return 0b0111
                case 6: return 0b0110
                case 5: return 0b0101
                case 4: return 0b0100
                case 3: return 0b0011
                case 2: return 0b0010
                case 1: return 0b0001
                case 0: return 0b1000 // brake then float
                case -1: return 0b1111
                case -2: return 0b1110
                case -3: return 0b1101
                case -4: return 0b1100
                case -5: return 0b1011
                case -6: return 0b1010
                case -7: return 0b1001
                default: return 0b0000 // float
            }
        }

        function createMessageFromNibbles(nibble1: number, nibble2: number, nibble3: number) {
            const lrc = 0xF ^ nibble1 ^ nibble2 ^ nibble3
            return (nibble1 << 12) | (nibble2 << 8) | (nibble3 << 4) | lrc
        }

        export function createSingleOutputPwmMessage(channel: PowerFunctionsChannel, output: PowerFunctionsOutput, value: number) {
            const nibble1 = 0b0000 + channel
            const nibble2 = 0b0100 + output
            const nibble3 = mapValueToPwmElseFloat(value)
            return createMessageFromNibbles(nibble1, nibble2, nibble3)
        }

        export function createComboDirectMessage(channel: PowerFunctionsChannel, outputRed: PowerFunctionsCommand, outputBlue: PowerFunctionsCommand) {
            const nibble1 = 0b0000 + channel
            const nibble2 = 0b0001
            const nibble3 = (outputBlue << 2) + outputRed
            return createMessageFromNibbles(nibble1, nibble2, nibble3)
        }

        export function createComboPwmMessage(channel: PowerFunctionsChannel, outputRed: number, outputBlue: number) {
            const nibble1 = 0b0100 + channel
            const nibble2 = mapValueToPwmElseFloat(outputBlue)
            const nibble3 = mapValueToPwmElseFloat(outputRed)
            return createMessageFromNibbles(nibble1, nibble2, nibble3)
        }
    }

    namespace transport {

        const IR_MARK = 6 * 1000000 / 38000
        const START_STOP_PAUSE = 39 * 1000000 / 38000
        const LOW_PAUSE = 10 * 1000000 / 38000
        const HIGH_PAUSE = 21 * 1000000 / 38000

        export class InfraredDevice {
            private pin: AnalogPin

            

            transmitBit(markMicroSeconds: number, pauseMicroSeconds: number): void {
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

        function sendStart(device: InfraredDevice): void {
            device.transmitBit(IR_MARK, LOW_PAUSE)
        }

        function sendStop(device: InfraredDevice): void {
            device.transmitBit(IR_MARK, START_STOP_PAUSE)
        }

        function sendLow(device: InfraredDevice): void {
            device.transmitBit(IR_MARK, LOW_PAUSE)
        }

        function sendHigh(device: InfraredDevice): void {
            device.transmitBit(IR_MARK, HIGH_PAUSE)
        }

        export function sendMessage(message: number, device: InfraredDevice): void {
            sendStart(device)
        }
    }



}