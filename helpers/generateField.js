class Field {
    static pathCharacter = '*'
    static hatCharacter = '^'
    static holeCharacter = 'O'
    static fieldCharacter = '░'
    #field
    #pathCharacterIndex
    #hatIndex
    constructor(field) {
        this.#field = Field.generateField()
        this.#initializeFieldProperties()
    }
    static generateField() {
        const randomIndex = Math.floor(Math.random() * 11)
        const randomField = Array(10).fill().map(() => {
            return Array(10).fill().map(() => Field.fieldCharacter )
        })

        console.log(randomField)

        //put characters in array based on percent
        //shuffle array rows

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
            let pathCharIndex = this.#field[i].indexOf(Field.pathCharacter)
            let hatIndex = this.#field[i].indexOf(Field.hatCharacter)
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
        } else if (this.#field[index[0]][index[1]] === Field.holeCharacter) {
            return 'Game Over! You fell in a hole!'
        } else if (this.#field[index[0]][index[1]] === Field.hatCharacter) {
            return 'You Won! You found the hat!'
        } else {
            this.#movePathCharacter(index)
            return true
        }
    }
    #movePathCharacter(index) {
        this.#field[this.#pathCharacterIndex[0]][this.#pathCharacterIndex[1]] = Field.fieldCharacter
        this.#field[index[0]][index[1]] = Field.pathCharacter
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

export default Field