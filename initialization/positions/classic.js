import { Tile } from '../../classes/Tiles'
import { King, Queen, Rook, Knight, Bishop, Pawn } from '../../classes/Pieces'

import { completePieceList, teams, teamTemplate } from '../pieces/all32pieces'

completePieceList.forEach( (piece,i) => {
    window[piece.pieceName] = completePieceList[i]
})

let letters = 'ABCDEFGH'.split('')
let initialBoard = {}
for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++) {
        // Generates the 64 tiles with proper naming and coordinates
        window[`Tile${i}${7 - j}`] = new Tile(i, 7 - j)

        //White
        if (7-j==0) {
            if (i==3) window[`Tile${i}${7 - j}`].setPiece(whiteKing)
            if (i==4) window[`Tile${i}${7 - j}`].setPiece(whiteQueen)
            if (i*(i-7) == 0) window[`Tile${i}${7 - j}`].setPiece(window[`whiteRook${ i==0 ? 1 : 2 }`])
            if ((i-1)*(i-6) == 0) window[`Tile${i}${7 - j}`].setPiece(window[`whiteKnight${ i==0 ? 1 : 2 }`])
            if ((i-2)*(i-5) == 0) window[`Tile${i}${7 - j}`].setPiece(window[`whiteBishop${ i==0 ? 1 : 2 }`])
        }
        if (7-j==1) window[`Tile${i}${7 - j}`].setPiece(window[`whitePawn${i+1}`])

        //Black
        if (7-j==7) {
            if (i==3) window[`Tile${i}${7 - j}`].setPiece(blackKing)
            if (i==4) window[`Tile${i}${7 - j}`].setPiece(blackQueen)
            if (i*(i-7) == 0) window[`Tile${i}${7 - j}`].setPiece(window[`blackRook${ i==0 ? 1 : 2 }`])
            if ((i-1)*(i-6) == 0) window[`Tile${i}${7 - j}`].setPiece(window[`blackKnight${ i==0 ? 1 : 2 }`])
            if ((i-2)*(i-5) == 0) window[`Tile${i}${7 - j}`].setPiece(window[`blackBishop${ i==0 ? 1 : 2 }`])
        }
        if (7-j==6) window[`Tile${i}${7 - j}`].setPiece(window[`blackPawn${i+1}`])

        initialBoard[`${letters[i]}${7 - j + 1}`] = window[`Tile${i}${7 - j}`]
    }
}

export { initialBoard }