enum RadioMessage {
    message1 = 49434,
    LightOn = 49786,
    LightOff = 64509,
    HeaterOn = 29523,
    HeaterOff = 54869,
    WaterOn = 6289,
    WaterTrigger = 8454
}
input.onPinPressed(TouchPin.P0, function () {
    radio.sendMessage(RadioMessage.HeaterOn)
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.LightOff)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendMessage(RadioMessage.WaterTrigger)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.HeaterOff)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendMessage(RadioMessage.LightOn)
})
let temp = 0
let light2 = 0
let RadioGroup = 1
radio.setGroup(RadioGroup)
basic.forever(function () {
    light2 = input.lightLevel()
    temp = input.temperature()
    basic.showString("Light Level: ")
    basic.showNumber(light2)
    basic.showString("Temperature (°C): ")
    basic.showNumber(temp)
    basic.pause(1000)
})
