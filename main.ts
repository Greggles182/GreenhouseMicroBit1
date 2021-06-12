let light2 = 0
let temp = 0
basic.forever(function () {
    light2 = input.lightLevel()
    temp = input.temperature()
    basic.showString("Light Level: ")
    basic.showNumber(light2)
    basic.showString("Temperature (°C): ")
    basic.showNumber(temp)
    music.playMelody("C D E F G A B C5 ", 120)
})
