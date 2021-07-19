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
input.onButtonPressed(Button.A, function () {
    if (gesperrt == 1) {
        reset()
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
function reset () {
    basic.clearScreen()
    basic.pause(1000)
    basic.pause(randint(1, 5) * 1000)
    music.ringTone(494)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    music.stopAllSounds()
    gesperrt = 0
}
let gesperrt = 0
gesperrt = 1
reset()
