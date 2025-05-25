const fs = require('fs'); 

const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n').map(Number);

/**
 * Two Sum and Three Sum Problem 
 * Find two or three entries in the list that sum to 2020 and return their product.
 */

// console.log('Input:', input);

const findTwoEntries = (numbers, target) => {
    const seen = new Set();
    for (const number of numbers) {
        const complement = target - number;
        if (seen.has(complement)) {
        return number * complement;
        }
        seen.add(number);
    }
    return null;
}

const findThreeEntries = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        const seen = new Set();
        const currentTarget = target - numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            const complement = currentTarget - numbers[j];
            if (seen.has(complement)) {
                return numbers[i] * numbers[j] * complement;
            }
            seen.add(numbers[j]);
        }
    }
    return null;
}

const part1 = findTwoEntries(input, 2020);
const part2 = findThreeEntries(input, 2020);
console.log('Part 1:', part1);
console.log('Part 2:', part2);

