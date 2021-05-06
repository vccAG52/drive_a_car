input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # # # .
        # . . # #
        # . # . #
        # # . . #
        . # # # .
        `)
})
basic.showString("Drive a car.")
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . # . #
        . # # # .
        `)
})
