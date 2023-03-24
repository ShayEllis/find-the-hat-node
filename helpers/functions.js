// Import using require()
//const prompt = require('prompt-sync')({signint: true})

// Import using ECMAScript import
import pkg from "prompt-sync"

const validateInput = (promptText) => {
    const testRegex = /^[udlr]{1}$/gi
    return testRegex.test(promptText.trim())
}

const getUserInput = () => {
    const prompt = pkg({sigint: true})
    let direction = prompt('Which way? ')
    while (!validateInput(direction)) {
        console.log('Invalid direction, the options are: u, d, l, r')
        direction = prompt('Which way? ')
    }
    return direction
}

export { getUserInput }