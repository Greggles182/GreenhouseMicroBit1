let temp = 0
let light2 = 0
basic.showString("Starting up...")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    light2 = input.lightLevel()
    temp = input.temperature()
    basic.showString("Light Level")
    basic.showNumber(light2)
    basic.showString("Temperature (°C)")
    basic.showNumber(temp)
})
