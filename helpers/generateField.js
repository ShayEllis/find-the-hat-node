const field = [
    ['*', 'O', '░', '░', '░', '░', '░'],
    ['░', 'O', '░', 'O', 'O', '░', '░'],
    ['░', 'O', '░', '░', 'O', 'O', '░'],
    ['░', '░', '░', 'O', '░', '░', '░'],
    ['O', '░', 'O', '░', 'O', 'O', 'O'],
    ['░', '░', '░', '░', '░', '░', '░'],
    ['O', 'O', 'O', 'O', 'O', 'O', '░'],
    ['O', '░', 'O', '░', '░', '░', '░'],
    ['░', '░', '░', '░', 'O', 'O', 'O'],
    ['░', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['░', '░', '░', '░', 'O', '^', 'O'],
    ['O', '░', 'O', '░', '░', '░', 'O'],
]

class Field {
    #field
    #pathCharacterIndex
    #hatIndex
    constructor(field) {
        this.#field = field
        this.pathCharacter = '*'
        this.hatCharacter = '^'
        this.holeCharacter = 'O'
        this.fieldCharacter = '░'
        this.#initializeFieldProperties()
    }
    #initializeFieldProperties() {
        for (let i = 0; i < this.#field.length - 1; i++) {
            let pathCharIndex = this.#field[i].indexOf(this.pathCharacter)
            let hatIndex = this.#field[i].indexOf(this.hatCharacter)
            if (pathCharIndex !== -1) {
                this.#pathCharacterIndex = [i, pathCharIndex]
            } else if (hatIndex !== -1 ) {
                this.#hatIndex = [i, hatIndex]
            }
        }
    }
    #movePathCharacter(index) {
        this.#field[this.#pathCharacterIndex[0]][this.#pathCharacterIndex[1]] = this.fieldCharacter
        this.#field[index[0]][index[1]] = this.pathCharacter
        this.#pathCharacterIndex = index
    }
    print() { 
        const stringField = this.#field.map((row) => row.join('')).join('\n')
        return stringField
    }
    moveUp() {
        const newIndex = [this.#pathCharacterIndex[0] - 1, this.#pathCharacterIndex[1]]
        //check for negative numbers - out of field
        //check for hole - hole character - fell in hole
        //Found hat - won
        this.#movePathCharacter(newIndex)
    }
    moveDown() {
        const newIndex = [this.#pathCharacterIndex[0] + 1, this.#pathCharacterIndex[1]]
        this.#movePathCharacter(newIndex)
    }
    moveLeft() {
        const newIndex = [this.#pathCharacterIndex[0], this.#pathCharacterIndex[1] - 1]
        this.#movePathCharacter(newIndex)
    }
    moveRight() {
        const newIndex = [this.#pathCharacterIndex[0], this.#pathCharacterIndex[1] + 1]
        this.#movePathCharacter(newIndex)
    }
}

export { field }
export default Field