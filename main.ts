let compteur = 0
function b_p () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        compteur = 5
        for (let index = 0; index < 5; index++) {
            if (compteur > 0) {
                pins.digitalWritePin(DigitalPin.P0, 0)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P2, 1)
                pins.digitalWritePin(DigitalPin.P12, 0)
                pins.digitalWritePin(DigitalPin.P13, 1)
                basic.showString("" + (compteur))
                compteur += -1
            }
        }
    }
}
basic.forever(function () {
    compteur = 8
    for (let index = 0; index < 8; index++) {
        if (compteur > 0) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P13, 1)
            basic.showString("" + (compteur))
            compteur += -1
        }
    }
    compteur = 4
    for (let index = 0; index < 4; index++) {
        if (compteur > 0) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            basic.showString("" + (compteur))
            compteur += -1
            b_p()
        }
    }
    compteur = 8
    for (let index = 0; index < 8; index++) {
        if (compteur > 0) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P12, 1)
            pins.digitalWritePin(DigitalPin.P13, 0)
            basic.showString("" + (compteur))
            compteur += -1
            b_p()
        }
    }
})
