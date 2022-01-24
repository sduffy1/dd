let list = 0
let text_list: string[] = []
input.onButtonPressed(Button.A, function () {
    basic.showNumber(list + 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(list - 0)
})
basic.forever(function () {
    basic.showString("" + (list[0]))
    text_list = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
    ]
})
