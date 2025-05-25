
const data = [[1, 2], [2, 4], [3, 4], [4, 5]]

const map = new Map()

data.forEach(item => {
    item.forEach((number) => {
        if(!map.has(number)){
            map.set(number, [])
        }
        map.get(number).push(item)
    })
})

console.log(map)