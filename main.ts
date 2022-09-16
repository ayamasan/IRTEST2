/**
 * IR受信テスト
 * 
 * パルス幅を測って、シリアル通信として受信する
 * 
 * 受信した正パルス幅を配列に格納
 * 
 * BボタンでBluetoothに1つずつ送信
 * 
 * Aボタンでクリア
 */
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    配列.push(pins.pulseDuration())
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    配列 = []
    データ = 0
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    配列.push(pins.pulseDuration())
})
input.onButtonPressed(Button.B, function () {
    if (0 < 配列.length) {
        basic.showArrow(ArrowNames.North)
        for (let カウンター = 0; カウンター <= 配列.length; カウンター++) {
            bluetooth.uartWriteNumber(配列[カウンター])
            basic.pause(20)
        }
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
    basic.clearScreen()
})
let データ = 0
let 配列: number[] = []
bluetooth.startUartService()
basic.showNumber(0)
let IR入力 = pins.digitalReadPin(DigitalPin.P0)
配列 = []
データ = 0
