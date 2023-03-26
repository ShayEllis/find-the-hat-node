// Import using require()
//const prompt = require('prompt-sync')({signint: true})
// Import using ECMAScript import
import pkg from "prompt-sync"
const prompt = pkg({sigint: true})

const getGameDifficulty = () => {
    const validateInput = (promptText) => {
        const testRegex = /^(easy|medium|hard)$/gi
        return testRegex.test(promptText.trim())
    }
    const gameDifficulty = prompt('Please select a difficulty (easy, medium, hard): ').toLowerCase()
    while (!validateInput(gameDifficulty)) {
        console.log('Invalid difficulty, the options are: easy, medium, hard')
        const gameDifficulty = prompt('Please select a difficulty (easy, medium, hard): ').toLowerCase()
    }
    return gameDifficulty
}

const getMoveDirection = () => {
    const validateInput = (promptText) => {
        const testRegex = /^[udlr]{1}$/gi
        return testRegex.test(promptText.trim())
    }
    let direction = prompt('Which way? (u, d, l, r) ').toLowerCase()
    while (!validateInput(direction)) {
        console.log('Invalid direction, the options are: u, d, l, r')
        direction = prompt('Which way? (u, d, l, r) ')
    }
    return direction
}

export { getGameDifficulty, getMoveDirection }