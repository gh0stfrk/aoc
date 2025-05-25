const fs = require('fs')


const readInputData = (filename) => {
    return fs.readFileSync(filename).toString()
}

const parseInput = (data, regex) => {
    const matched = data.match(regex)
    return matched
}

const convertToArray = (inputs) => {
    const integerArray = []
    inputs.forEach(element => {
        const digit = element.match(/\d+/g).map(Number)
        integerArray.push(digit)
    });
    return integerArray
}

const calculateSum = (array) => {
    let sum = 0;
    array.forEach((element)=>{
        sum += element[0] * element[1]
    })
    return sum
}

const matchStopper = (string) => {
    let stoppers = []
    const dontPattern = /don't\(\)/g
    const result = string.matchAll(dontPattern)
    for(const match of result){
        stoppers.push(match.index)
    }
    return stoppers
}

const greenLight = (string) => {
    let go = []
    const doPattern = /do\(\)/g
    const matched = string.matchAll(doPattern)
    for(const match of matched){
        go.push(match.index)
    }
    return go
}


const input = readInputData('input.txt')



const stopIndexes = matchStopper(input)
console.log(stopIndexes)
const startIndexes = greenLight(input)
console.log(startIndexes)




const pattern = /mul\(\d+,\d+\)/g
const parsed = parseInput(input, pattern)

 

const intArr = convertToArray(parsed)
console.log(intArr)
const res = calculateSum(intArr)

// console.log(intArr)
console.log(res)

// console.log(parsed)