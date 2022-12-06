import { Tile } from "./Tiles";
import { legalHorizontalMovement, legalVerticalMovement, legalDiagonalMovement, knightMovement, pawnMovement } from './Movement'

export class Piece {
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

    death() {
        this.isDead = true
    }

    move(startingTile, tileList) {
        console.log(startingTile)
    }
}

export class King extends Piece {

    constructor(pieceName, team, symbol1 = '9812', symbol2 = '9818', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    legalMovementFrom = (startingTile, tileList) => {
        let startingX = startingTile.getCoordinates().x
        let startingY = startingTile.getCoordinates().y

        Object.keys(tileList).forEach(tile => {
            // if (tileList[tile].getCoordinates().x == startingX && ( (tileList[tile].getCoordinates().y - startingY + 1)*(tileList[tile].getCoordinates().y - startingY - 1) == 0 ) || tileList[tile].getCoordinates().y == startingY && ( (tileList[tile].getCoordinates().x - startingX + 1)*(tileList[tile].getCoordinates().x - startingX - 1) == 0 )) tileList[tile].switchIsMovableTo(true)

            // if ((tileList[tile].getCoordinates().y - startingY + 1) * (tileList[tile].getCoordinates().y - startingY - 1) == 0 || (tileList[tile].getCoordinates().x - startingX + 1) * (tileList[tile].getCoordinates().x - startingX - 1) == 0) tileList[tile].switchIsMovableTo(true)

            if (legalHorizontalMovement(startingTile, tileList[tile], 1) || legalVerticalMovement(startingTile, tileList[tile], 1) || legalDiagonalMovement(startingTile, tileList[tile], 1)) tileList[tile].switchIsMovableTo(true)
        })
    }
}

export class Queen extends Piece {

    constructor(pieceName, team, symbol1 = '9813', symbol2 = '9819', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    legalMovementFrom = (startingTile, tileList) => {
        let startingX = startingTile.getCoordinates().x
        let startingY = startingTile.getCoordinates().y

        Object.keys(tileList).forEach(tile => {
            if (legalHorizontalMovement(startingTile, tileList[tile], 7) || legalVerticalMovement(startingTile, tileList[tile], 7) || legalDiagonalMovement(startingTile, tileList[tile], 7)) tileList[tile].switchIsMovableTo(true)
        })
    }
}

export class Rook extends Piece {

    constructor(pieceName, team, symbol1 = '9814', symbol2 = '9820', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    legalMovementFrom = (startingTile, tileList) => {
        let startingX = startingTile.getCoordinates().x
        let startingY = startingTile.getCoordinates().y

        Object.keys(tileList).forEach(tile => {
            if (legalHorizontalMovement(startingTile, tileList[tile], 7) || legalVerticalMovement(startingTile, tileList[tile], 7) ) tileList[tile].switchIsMovableTo(true)
        })
    }
}

export class Bishop extends Piece {

    constructor(pieceName, team, symbol1 = '9815', symbol2 = '9821', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    legalMovementFrom = (startingTile, tileList) => {
        let startingX = startingTile.getCoordinates().x
        let startingY = startingTile.getCoordinates().y

        Object.keys(tileList).forEach(tile => {
            if (legalDiagonalMovement(startingTile, tileList[tile], 7)) tileList[tile].switchIsMovableTo(true)
        })
    }
}

export class Knight extends Piece {

    constructor(pieceName, team, symbol1 = '9816', symbol2 = '9822', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    legalMovementFrom = (startingTile, tileList) => {
        Object.keys(tileList).forEach(tile => {
            if (knightMovement(startingTile, tileList[tile])) tileList[tile].switchIsMovableTo(true)
        })
    }
}

export class Pawn extends Piece {

    constructor(pieceName, team, symbol1 = '9817', symbol2 = '9823', isDead) {
        let chosenSymbol = team ? symbol1 : symbol2
        super(pieceName, team, chosenSymbol)
    }

    legalMovementFrom = (startingTile, tileList, team) => {
        Object.keys(tileList).forEach(tile => {
            if (pawnMovement(startingTile, tileList[tile])) tileList[tile].switchIsMovableTo(true)
        })
    }
}