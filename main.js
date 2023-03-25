import { getUserInput } from "./helpers/functions.js";
import Field from "./helpers/generateField.js";

const gameField = new Field()
let moveResult = true

while (moveResult === true) {
    console.log(gameField.print())

    const direction = getUserInput()

    moveResult = gameField.move(direction)
}

console.log(moveResult)