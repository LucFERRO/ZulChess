class Piece {
    constructor(pieceName, team, symbol, isDead = false) {
        this.pieceName = pieceName;
        this.team = team;
        this.symbol = symbol;
        this.isDead = isDead;
    }
}

export class King extends Piece {
    move = (x,y) => {
        console.log(this.pieceName)
    }
}

export class Queen extends Piece {
    move = (x,y) => {
        console.log(this.pieceName)
    }
}

export class Rook extends Piece {
    move = (x,y) => {
        console.log(this.pieceName)
    }
}

export class Knight extends Piece {
    move = (x,y) => {
        console.log(this.pieceName)
    }
}

export class Bishop extends Piece {
    move = (x,y) => {
        console.log(this.pieceName)
    }
}

export class Pawn extends Piece {
    move = (x,y) => {
        console.log(this.pieceName)
    }
}