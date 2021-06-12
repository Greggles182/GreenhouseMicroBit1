light2 = 0
temp = 0

def on_forever():
    global light2, temp
    light2 = input.light_level()
    temp = input.temperature()
    basic.show_string("Light Level: ")
    basic.show_number(light2)
    basic.show_string("Temperature (°C): ")
    basic.show_number(temp)
    music.play_melody("C D E F G A B C5 ", 120)
basic.forever(on_forever)
