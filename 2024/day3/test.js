const fs = require('fs')


const readInputData = (filename) => {
    return fs.readFileSync(filename).toString()
}

const input = readInputData('input.txt')

console.log(`Length of inupt :: ${input.length}`)
let arr1 = []
for(let x = 0; x < input.length; x++){
    let beginMark = 0;
    let endMark = 0;
    console.log(input[x])
    if(input[x]+input[x+1] === 'do'){
        if(beginMark !== 0){
            endMark = x
            break
        }
        beginMark = x
    }
    let slice = input.slice(beginMark, endMark)
    console.log(slice);
    arr1.push(slice)
}

console.log(arr1)
