import { getUserInput } from "./helpers/functions.js";
import Field, { field } from "./helpers/generateField.js";

const gameField = new Field(field)
let moveResult = true

while (moveResult === true) {
    console.log(gameField.print())

    const direction = getUserInput()

    moveResult = gameField.move(direction)
}

console.log(moveResult)