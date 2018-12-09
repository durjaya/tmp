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
            const irDevice = new transport.InfraredDevice(pin)
            const msg = message.createSingleOutputPwmMessage(channel, output, speed)
            transport.sendMessage(msg, irDevice)
        })
    }

    /**
     * Configures the infrared LED pin. A 940 nm emitting diode is required.
     */
    //% blockId=pf_use_ir_led_pin
    //% block="use IR LED on pin %pin"
    //% weight=30
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.tooltips="false"
    //% advanced=true
    export function useIrLedPin(pin: AnalogPin) {
        irLed = pin
    }

    /**
     * Configures a motor direction.
     */
    //% blockId=pf_set_motor_direction
    //% block="set direction | of motor %motor | to %direction"
    //% weight=20
    //% motor.fieldEditor="gridpicker" motor.fieldOptions.columns=4 motor.fieldOptions.tooltips="false"
    //% advanced=true
    export function setMotorDirection(motor: PowerFunctionsMotor, direction: PowerFunctionsDirection) {
        motorDirections[motor] = direction
    }

    /**
     * Adjust timing configuration to reach the required IR precision.
     * Due to the overhead of function calls the sleep intervals during transmission of IR commands need to be shortened.
     * Timing depends on both the device and the MakeCode version.
     * Recommended default values are -65 micro seconds for the IR mark and -150 micro seconds for the pause.
     */
    //% blockId=pf_adjust_ir_timing
    //% block="adjust timing | of IR mark %markMicroSeconds | and pause %pauseMicroSeconds"
    //% weight=10
    //% markMicroSeconds.min=-157 markMicroSeconds.max=0
    //% pauseMicroSeconds.min=-263 pauseMicroSeconds.max=0
    //% advanced=true
    export function adjustIrTiming(
        markMicroSeconds: number = BoardConfig.MarkTimingCorrectionMicroSeconds,
        pauseMicroSeconds: number = BoardConfig.PauseTimingCorrectionMicroSeconds)
    {
        markTimingCorrectionMicroSeconds = markMicroSeconds;
        pauseTimingCorrectionMicroSeconds = pauseMicroSeconds;
    }

    /**
     * Move a motor forward.
     */
    //% blockId=pf_move_forward
    //% block="move forward | with motor %motor"
    //% weight=100
    //% motor.fieldEditor="gridpicker" motor.fieldOptions.columns=4 motor.fieldOptions.tooltips="false"
    export function moveForward(motor: PowerFunctionsMotor) {
        setSpeed(motor, 3)
    }

    /**
     * Move a motor backward.
     */
    //% blockId=pf_move_backward
    //% block="move backward | with motor %motor"
    //% weight=90
    //% motor.fieldEditor="gridpicker" motor.fieldOptions.columns=4 motor.fieldOptions.tooltips="false"
    export function moveBackward(motor: PowerFunctionsMotor) {
        setSpeed(motor, -3)
    }

    /**
     * Brake then float.
     * The motor's power is quickly reversed and thus the motor will stop abruptly.
     */
    //% blockId=powerfunctions_brake
    //% block="brake| motor %motor"
    //% weight=80
    //% motor.fieldEditor="gridpicker" motor.fieldOptions.columns=4 motor.fieldOptions.tooltips="false"
    export function brake(motor: PowerFunctionsMotor) {
        setSpeed(motor, 0)
    }


    /**
     * Set speed of a motor.
     */
    //% blockId=powerfunctions_set_speed
    //% block="11set | motor %motor | to %speed"
    //% speed.min=-7 speed.max=7
    //% weight=60
    //% motor.fieldEditor="gridpicker" motor.fieldOptions.columns=4 motor.fieldOptions.tooltips="false"
    export function setSpeed(motor: PowerFunctionsMotor, speed: number) {
        speed = Math.max(-7, Math.min(7, speed))
        sendSingleOutputCommand(irLed, getChannel(motor), getOutput(motor), speed * motorDirections[motor])
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

            constructor(
                pin: AnalogPin,
                pwmPeriod = 26
            ) {
                this.pin = pin
                pins.analogWritePin(this.pin, 0)
                pins.analogSetPeriod(this.pin, pwmPeriod)
            }

            transmitBit(markMicroSeconds: number, pauseMicroSeconds: number): void {
                let factorx = 1
                //1
                ledOn(6000 * factorx);
            
                //2
                ledOff(600 * factorx);
            
                //3
                ledOn(600 * factorx);
            
                //4
                ledOff(1500 * factorx);
            
                //5
                ledOn(1500 * factorx);
            
                //6
                ledOff(600 * factorx);
            
                //7
                ledOn(1500 * factorx);
            
                //8
                ledOff(600 * factorx);
            
                //9
                ledOn(1500 * factorx);
            
                //10
                ledOff(600 * factorx);
            
                //11
                ledOn(600 * factorx);
            
                //12
                ledOff(1500 * factorx);
            
                //13
                ledOn(1500 * factorx);
            
                //14
                ledOff(600 * factorx);
            
                //15
                ledOn(1500 * factorx);
            
                //16
                ledOff(600 * factorx);
            
                //17
                ledOn(1500 * factorx);
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


    export function runTests() {

        {
           let a = 1
        }

    }
}
