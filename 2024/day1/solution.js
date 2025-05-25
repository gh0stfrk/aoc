const fs = require('fs')

// Read File
const readFile = (filename) => {
    const data = fs.readFileSync('./input.txt').toString()
    return data
}

// Parse Data
const getParsedData = (data) => {
    const firstList = []
    const secondList = []
    const lines = data.trim().split('\n')
    lines.forEach((item) => {
        const [num1, num2] = item.split('  ').map(Number)

        firstList.push(num1)
        secondList.push(num2)
    })

    return [
        firstList,
        secondList
    ]
}

// Calculate Result
const getResult = (firstList, secondList) => {
    firstList.sort()
    secondList.sort()
    console.log(`First List length: ${firstList.length}\nSecond List Length: ${secondList.length}`)
    const difference = []
    firstList.forEach((element, idx) => {
        difference.push(Math.abs(element - secondList[idx]))
    })
    const sum = difference.reduce((curr, prev) => curr + prev)
    return sum
}


// part 2

const part2Solution = (listOne, listTwo) => {
    let similarityScore = [];
    let ss = 0;

    listOne.forEach(element => {
        const count = listTwo.filter(item => item == element).length
        console.log(`Number is ::: ${element}`)
        console.log(`Count in L2 = ${count}`)
        console.log(`Socre = ${count * element}`)
        similarityScore.push(element * count)
        ss += count * element;
    });

    return ss
}

function main() {
    const data = readFile('./input.txt')
    const [listOne, listTwo] = getParsedData(data)

    const part2 = part2Solution(listOne, listTwo)
    // const result = getResult(listOne, listTwo)
    // console.log(`Sum ${result}`)

    console.log(`Part Two is ::: ${part2}`)

    


}






main()

