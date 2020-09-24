input.onButtonPressed(Button.A, function () {
    if (Fiets) {
        basic.clearScreen()
        basic.showString("Food")
        basic.clearScreen()
        basic.showString("" + (foodList[randint(0, 4)]))
        Fiets = false
    } else {
        basic.showString("CYCLE!")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Fiets) {
        basic.clearScreen()
        basic.showString("Culture")
        basic.clearScreen()
        basic.showString("" + (cultureList[randint(0, 4)]))
        Fiets = false
    } else {
        basic.showString("CYCLE!")
    }
})
input.onGesture(Gesture.Shake, function () {
    Fiets = true
})
let Fiets = false
let foodList: string[] = []
let cultureList: string[] = []
cultureList = ["Theater", "Film", "Museum", "Muziek", "Street art"]
foodList = ["Frietjes", "Pizza", "Durum", "Spaghetti", "Sla"]
basic.forever(function () {
	
})
