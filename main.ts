input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P0) > 900) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.showString("Wet")
    } else if (pins.analogReadPin(AnalogPin.P0) <= 700) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.showString("Moist")
    } else {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.showString("Dry")
    }
})
basic.showString("Soil Moisture tester",50)
