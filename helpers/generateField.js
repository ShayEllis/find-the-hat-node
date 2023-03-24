class Field {
    #field
    #pathCharacterIndex
    #hatIndex
    constructor(field) {
        this.#field = this.generateField()
        this.pathCharacter = '*'
        this.hatCharacter = '^'
        this.holeCharacter = 'O'
        this.fieldCharacter = '░'
        this.#initializeFieldProperties()
    }
    static generateField() {
        return [
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
    #checkLocation(index) {
        if (index[0] < 0 || index[1] < 0) {
            return 'Game Over! You moved outside of the field!'
        } else if (this.#field[index[0]][index[1]] === this.holeCharacter) {
            return 'Game Over! You fell in a hole!'
        } else if (this.#field[index[0]][index[1]] === this.hatCharacter) {
            return 'You Won! You found the hat!'
        } else {
            this.#movePathCharacter(index)
            return true
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
    move(direction) {
        switch (direction.toLowerCase()) {
            case 'u': {
                const newIndex = [this.#pathCharacterIndex[0] - 1, this.#pathCharacterIndex[1]]
                return this.#checkLocation(newIndex)
            }
            case 'd': {
                const newIndex = [this.#pathCharacterIndex[0] + 1, this.#pathCharacterIndex[1]]
                return this.#checkLocation(newIndex) 
            }
            case 'l': {
                const newIndex = [this.#pathCharacterIndex[0], this.#pathCharacterIndex[1] - 1]
                return this.#checkLocation(newIndex) 
            }
            case 'r': {
                const newIndex = [this.#pathCharacterIndex[0], this.#pathCharacterIndex[1] + 1]
                return this.#checkLocation(newIndex) 
            }
        }
    }
}

export { field }
export default Field