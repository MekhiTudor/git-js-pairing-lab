//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i < 101; i++) {
        console.log(i)
    }
}
fiveToOneHundred()

const multiplesOfThree = () => {
    for (let i = 0; i < 101; i++) {
        console.log(i * 3)
    }
}

multiplesOfThree()

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
}
multiplesOfThreeOrFive()

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }

}
untilNum(5)

const multiply = (a, b) => {
    return a * b
}
console.log(multiply(2, 5))

const add = (a, b) => {
    if (a === b) {
        return a * 3
    }
    else {
        return a + b
    }
}
console.log(add(3, 3))
console.log(add(3, 5))

const isNegative = (num) => {
    if (num < 0) {
        return true
    }
    else if (num > 0) {
        return false
    }
    else {
        return "This is 0."
    }
}
console.log(isNegative(10))
console.log(isNegative(-20))
console.log(isNegative(0))