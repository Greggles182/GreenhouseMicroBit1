enum RadioMessage {
    message1 = 49434,
    LightOn = 49786,
    LightOff = 64509,
    HeaterOn = 29523,
    HeaterOff = 54869
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
    radio.sendMessage(RadioMessage.HeaterOn)
    radio.sendMessage(RadioMessage.LightOn)
    basic.pause(1000)
})
