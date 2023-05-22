let x = 0
let y = 0
basic.forever(function () {
    basic.clearScreen()
    x = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    800,
    0,
    4
    )
    y = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    800,
    0,
    4
    )
    led.plot(x, y)
})
