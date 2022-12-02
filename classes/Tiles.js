export class Tile {
    constructor(x, y, piece = null, movableTo = false) {
        this.x = x
        this.y = y
        this.piece = piece
        this.movableTo = movableTo
    }

    getCoordinates() {
        return { x: this.x, y: this.y }
    }

    setPiece(piece) {
        this.piece = piece
    }

    removePiece() {
        this.piece = null
    }

    getPiece() {
        return this.piece
    }

    isBlack() {
        return (this.x + this.y) % 2 != 0
    }

    getIsMovableTo() {
        return this.movableTo
    }

    switchIsMovableTo(bool) {
        this.movableTo = bool
    }
}