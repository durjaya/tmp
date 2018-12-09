/* This is a demo on how to send SAMSUNG ir codes.
 * The code expects an IR led to be connected to Pin 0
 * 
 * A SAMSUNG IR code has the following form
 * 
 * START SIGNAL
 * 32 bits i.e. 32 time ONE or ZERO signal
 * END SIGNAL
 * 
 * Each of these 4 signals is encoded by a certain time of a 38 khz 
 * pulsed signal (on) followed by a certain time off.
 * 
 * START SIGNAL: 4500 μs on, 4500 μs off
 * ONE SIGNAL: 560 μs on, 1600 μs off
 * ZERO SIGNAL: 560 μs on, 530 μs off
 * END SIGNAL: 560 μs on, 4500 μs off
 * 
 * 
 * 
 跳舞

 音量+
 音量-
 
 步行前进
 步行后退

滑行前进
滑行后退
左转
右转
停止

向左看
向右看

数学
科普
英语

声控互动
能量转换
编程
歌曲

 */

// timing constants
const LEADER_PULSE = 6000;
const PULSE_ONE = 1600;
const PULSE_ZERO = 530;

// slow down factor for demo, at about 100 or 200 times slower
// you can see what is going on
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

//send 8 bit
function send(code: number) {
    for (let i = 15; i > -1; i--) {
        if (1 << i & code) {
            ledOn(PULSE_ONE);
        } else {
            ledOff(PULSE_ZERO);
        }
    }
}

// send 32 bit with appropriate start and end
function command(ir1: number, ir2: number) {
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

// Button A sends code
input.onButtonPressed(Button.A, () => {
    command(0x35, 0x35);
    //send(0x35)


    
})
