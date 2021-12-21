enum RadioMessage {
    WaterOn = 6289,
    WaterTrigger = 8454,
    HeaterOn = 29523,
    message1 = 49434,
    LightOn = 49786,
    HeaterOff = 54869,
    LightOff = 64509
}
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
    if (68 > light2) {
        radio.sendMessage(RadioMessage.LightOn)
    } else {
        radio.sendMessage(RadioMessage.LightOff)
    }
    if (40 > temp) {
        radio.sendMessage(RadioMessage.HeaterOn)
    } else {
        radio.sendMessage(RadioMessage.HeaterOff)
    }
    if (40 > pins.analogReadPin(AnalogPin.P0)) {
        radio.sendMessage(RadioMessage.WaterTrigger)
    }
    basic.pause(1000)
})
