import { getGameDifficulty, getMoveDirection } from "./helpers/functions.js";
import Field from "./helpers/generateField.js";

const difficulty = getGameDifficulty()
const gameField = new Field(difficulty)

let moveResult
do {
    console.log(gameField.print())

    const direction = getMoveDirection()

    moveResult = gameField.move(direction)
} while (moveResult === true)

console.log(moveResult)