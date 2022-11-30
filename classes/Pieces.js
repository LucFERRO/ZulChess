class Piece {
    constructor(pieceName, team, symbol, isDead = false) {
        this.pieceName = pieceName;
        this.team = team;
        this.symbol = symbol;
        this.isDead = isDead;
    }

    getSymbol() {
        return this.symbol
    }

    getTeam() {
        return this.team
    }
}

export class King extends Piece {

    constructor(pieceName, team, symbol1 = '9812', symbol2 = '9818', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    move = (x, y) => {
        console.log(this.pieceName)
    }
}

export class Queen extends Piece {

    constructor(pieceName, team, symbol1 = '9813', symbol2 = '9819', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    move = (x, y) => {
        console.log(this.pieceName)
    }
}

export class Rook extends Piece {

    constructor(pieceName, team, symbol1 = '9814', symbol2 = '9820', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    move = (x, y) => {
        console.log(this.pieceName)
    }
}

export class Bishop extends Piece {

    constructor(pieceName, team, symbol1 = '9815', symbol2 = '9821', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    move = (x, y) => {
        console.log(this.pieceName)
    }
}

export class Knight extends Piece {

    constructor(pieceName, team, symbol1 = '9816', symbol2 = '9822', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    move = (x, y) => {
        console.log(this.pieceName)
    }
}

export class Pawn extends Piece {

    constructor(pieceName, team, symbol1 = '9817', symbol2 = '9823', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    move = (x, y) => {
        console.log(this.pieceName)
    }
}