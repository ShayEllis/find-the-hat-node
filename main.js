import { getUserInput } from "./helpers/functions.js";
import Field, { field } from "./helpers/generateField.js";

const gameField = new Field(field)

while (true) {
    console.log(gameField.print())

    const direction = getUserInput()

    switch (direction.toLowerCase()) {
        case 'u': {
            gameField.moveUp()
            break
        }
        case 'd': {
            gameField.moveDown()
            break        
        }
        case 'l': {
            gameField.moveLeft()
            break
        }
        case 'r': {
            gameField.moveRight()
            break
        }
    }
}