pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    配列.push(pins.pulseDuration())
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
/**
 * パルス幅を測って、シリアル通信として受信する
 * 
 * 受信した正パルス幅を配列に格納
 * 
 * BボタンでBluetoothに1つずつ送信
 * 
 * Aボタンでクリア
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    配列 = []
    データ = 0
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    配列.push(pins.pulseDuration())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(配列.length)
    if (データ < 配列.length) {
        bluetooth.uartWriteNumber(配列[データ])
        basic.showNumber(データ)
        データ += 1
    }
})
let データ = 0
let 配列: number[] = []
bluetooth.startUartService()
basic.showNumber(0)
let IR入力 = pins.digitalReadPin(DigitalPin.P0)
配列 = []
データ = 0
basic.forever(function () {
	
})
