input.onPinPressed(TouchPin.P0, function () {
    if (gesperrt == 0) {
        gesperrt = 1
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (gesperrt == 0) {
        gesperrt = 1
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
let gesperrt = 0
basic.pause(randint(1, 5) * 1000)
music.ringTone(494)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
music.stopAllSounds()
gesperrt = 0
