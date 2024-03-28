//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i < 101; i++) {
        console.log(i)
    }
}
fiveToOneHundred()

const multiplesOfThree = () => {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}

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
    } else {
        return a + b
    }
}
console.log(add(3, 3))
console.log(add(3, 5))

const isNegative = (num) => {
    if (num < 0) {
        return true
    } else if (num > 0) {
        return false
    } else {
        return "This is 0."
    }
}
console.log(isNegative(10))
console.log(isNegative(-20))
console.log(isNegative(0))

const triangleArea = (a, b) => {
    return ((a * b) / 2)
}
console.log(triangleArea(6, 8))

const betweenTwentyandForty = (num) => {
    if (num > 20 && num < 40) {
        return true
    }
    else {
        return false
    }
}

console.log(betweenTwentyandForty(20))
console.log(betweenTwentyandForty(39))
console.log(betweenTwentyandForty(40))

const largest = (a, b, c) => {
    if (a > b && a > c) {
        return a
    }
    else if (b > a && b > c) {
        return b
    }
    else if (c > a && c > b) {
        return c
    }
}

console.log(largest(1, 2, 3))
console.log(largest(10, 20, 5))
console.log(largest(29, 74, 103))

