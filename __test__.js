const index = 15

let position = (index+1) % 4;

let side = "center"
if (position === 1) {
    side = "left"
} else if (position === 0) {
    side = "right"
}

console.log(`${position}: ${side}`)
