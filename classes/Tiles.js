export class Tile {
    constructor(x, y, piece = null) {
        this.x = x
        this.y = y
        this.piece = piece
    }

    setPiece(piece) {
        this.piece = piece
    }

    removePiece() {
        this.piece = null
    }

    getCoordinates() {
        return { x: this.x, y: this.y }
    }

    getPiece() {
        return this.piece
    }

    isBlack() {
        return (this.x + this.y) % 2 != 0
    }
}