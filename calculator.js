let firstNum = 9
let secondNum = 69
let divisAmount = 99
let result = 0
let favNumbers = [9, 31, 36, 69]

console.log(favNumbers)

function add(firstNum, secondNum)
{
    if (favNumbers.includes(firstNum) || favNumbers.includes(secondNum))
    {
        console.log("Yay you used my favourite numbers!!")
    }
    else console.log("You didnt use my favourite  numbers  :(")

    if (typeof firstNum === "number" && typeof secondNum === "number" )
    {
        return sum = firstNum + secondNum
    }
    else console.log("input a valid number")
}

console.log(add(firstNum, secondNum))

for (let i = 1; i <= divisAmount; i++) // THE useless for loop
{
    result += sum / 2
}
console.log(result)