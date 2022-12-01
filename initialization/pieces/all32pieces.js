import { King, Queen, Rook, Knight, Bishop, Pawn } from '../../classes/Pieces'

let teams = ['white', 'black']
let teamTemplate = [King, Queen, Rook, Knight, Bishop, Pawn]
let completePieceList = []

teams.forEach(team => {
    teamTemplate.forEach(piece => {
        let count = 1
        if (piece == Rook || piece == Knight || piece == Bishop) count = 2
        if (piece == Pawn) count = 8
        let i = 1
        while (i <= count) {
            window[`${team}${piece}${(piece == King || piece == Queen) ? '' : i}`] = new piece(`${team}${piece.name}${(piece == King || piece == Queen) ? '' : i}`, team == 'white')
            completePieceList.push(window[`${team}${piece}${(piece == King || piece == Queen) ? '' : i}`])
            i += 1
        }
    })
})

export { completePieceList, teams, teamTemplate }