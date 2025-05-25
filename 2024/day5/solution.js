const fs = require('fs')


const readFile = (filename) => {
    return fs.readFileSync(filename).toString()
}


const extractData = (data) => {
    let part1 = []
    let part2 = []

    const parts = data.split('\n')
    parts.forEach((item) => {
        if (item)
            item.includes('|') ? part1.push(item) : part2.push(item)
    })
    // console.log(part1)
    // console.log(part2)
    return [
        part1, part2
    ]
}

// Stuck here can't break a for each
// was planning on checking the 0th index of
// each pageRules on each pageNumber
// If the number is not on the 0th index then it checks 
// the pageArray for the item to be before the current number
// and then adds the array to the list of validItems
const findValidPages = (pageMap, pages) => {
    const validItems = []
    pages.forEach(item => {
        let isValid = false;
        item.forEach((number, idx) => {
            const validCheck = pageMap.get(number)
            validCheck.forEach(array => {
                // console.log(array)
                if(array[0] !== number){
                    const indexOfItem = item.indexOf(array[0])
                    if(indexOfItem > idx ){
                        isValid = true;
                    }
                }

            })
        })
    })

    console.log(validItems)

}

const createNumberMap = (input) => {
    const map = new Map()

    input.forEach((subArray) => {
        subArray.forEach((num) => {
            if (!map.has(num)) {
                map.set(num, [])
            }
            map.get(num).push(subArray)
        })
    })

    return map
}

const calculateSolution = (first, second) => {
    const pageOrder = []
    first.forEach(item => {
        const pageNumbers = item.trim().split('|').map(Number)
        pageOrder.push(pageNumbers)
    })

    const pagesToProduce = []
    second.forEach(pageNumbers => {
        const collection = pageNumbers.trim().split(',').map(Number)
        pagesToProduce.push(collection)
    })

    const pageMap = createNumberMap(pageOrder)
    const validPages = findValidPages(pageMap, pagesToProduce)

    // console.log(pageMap)
    // console.log(pageOrder)
    // console.log(pagesToProduce)


}

(() => {
    const input = readFile('sample')
    // const input = readFile('input.txt')
    const [firstArr, secondArr] = extractData(input)
    const solution = calculateSolution(firstArr, secondArr)
})()