const fs = require('fs')

/**
 * Reads data from a file converts it to a string and returns it.
 * @param {string} filename 
 * @returns {string} string data from the file
 */
const readData = (filename) => {
    const data = fs.readFileSync(filename).toString()
    return data
}


/**
 * Creats an array of integers from the input string data
 * converts it to a Number and then returns an array of
 * arrays of Numbers.
 * @param {string} data 
 * @returns { Array<Array<Number>>> } An array of arrays of number
 */
const processData = (data) => {
    const items = []
    const lines = data.trim().split('\n')
    lines.forEach(element => {
        const numbers = element.split(' ').map(Number)
        items.push(numbers)
    });
    return items
}

const getPart1Solution = (reports) => {
    const validReports = reports.filter((report) => {
        let valid = true;
        let ascending = 0; let descending = 0;
        let finalCheck = true;
        for (let idx = 1; idx < report.length; idx++) {
            const diff = Math.abs(report[idx] - report[idx - 1])
            if (diff > 3 || diff == 0) {
                valid = false
                break
            }
            if (report[idx] > report[idx - 1]) {
                descending++
            }
            if (report[idx] < report[idx - 1]) {
                ascending++
            }
        }
        if(ascending && descending){
            finalCheck = false
        }
        return valid && finalCheck
    })
    return validReports
}

const getPart2Solution = (reports) => {
    const validReports = reports.filter((report) => {
        let valid = true;
        let ascending = 0; let descending = 0;
        let finalCheck = true;
        let dampnerSkip = 0
        for (let idx = 1; idx < report.length; idx++) {
            const diff = Math.abs(report[idx] - report[idx - 1])
            if (diff > 3) {
                valid = false
                break
            }
            if(diff == 0){
                if(dampnerSkip > 1){
                    valid = false
                    break
                }
                dampnerSkip++
            }
            if (report[idx] > report[idx - 1]) {
                descending++
            }
            if (report[idx] < report[idx - 1]) {
                ascending++
            }
        }
        if(ascending && descending){
            ascending ? (descending > 2 ? (finalCheck = false) : null) : 
            descending ? (ascending > 2 ? (finalCheck = true) : null) : null;            
        }
        return valid && finalCheck
    })
    return validReports
}



const data = readData('sample.txt')
const reports = processData(data)

// const part1 = getPart1Solution(reports)
const part2 = getPart2Solution(reports)

// console.log(part1.length)
console.log(part2)