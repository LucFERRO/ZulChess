import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import boardStyle from '../styles/Board.module.scss'

import { King, Queen, Rook, Bishop, Knight, Pawn } from '../classes/Pieces'
import { Tile } from '../classes/Tiles'


export default function Board() {

    let array = [0, 1, 2, 3, 4, 5, 6, 7]

    // let whiteTeamStartingPos = {
    //     rook1: {
    //         x: 0,
    //         y: 0,
    //         symbol: '9814',
    //         isDead: false
    //     },
    //     knight1: {
    //         x: 1,
    //         y: 0,
    //         symbol: '9816',
    //         isDead: false
    //     },
    //     bishop1: {
    //         x: 2,
    //         y: 0,
    //         symbol: '9815',
    //         isDead: false
    //     },
    //     queen: {
    //         x: 3,
    //         y: 0,
    //         symbol: '9813',
    //         isDead: false
    //     },
    //     king: {
    //         x: 4,
    //         y: 0,
    //         symbol: '9812',
    //         isDead: false
    //     },
    //     bishop2: {
    //         x: 5,
    //         y: 0,
    //         symbol: '9815',
    //         isDead: false
    //     },
    //     knight2: {
    //         x: 6,
    //         y: 0,
    //         symbol: '9816',
    //         isDead: false
    //     },
    //     rook2: {
    //         x: 7,
    //         y: 0,
    //         symbol: '9814',
    //         isDead: false
    //     },
    //     pawn1: {
    //         x: 0,
    //         y: 1,
    //         symbol: '9817',
    //         isDead: false
    //     },
    //     pawn2: {
    //         x: 1,
    //         y: 1,
    //         symbol: '9817',
    //         isDead: false
    //     },
    //     pawn3: {
    //         x: 2,
    //         y: 1,
    //         symbol: '9817',
    //         isDead: false
    //     },
    //     pawn4: {
    //         x: 3,
    //         y: 1,
    //         symbol: '9817',
    //         isDead: false
    //     },
    //     pawn5: {
    //         x: 4,
    //         y: 1,
    //         symbol: '9817',
    //         isDead: false
    //     },
    //     pawn6: {
    //         x: 5,
    //         y: 1,
    //         symbol: '9817',
    //         isDead: false
    //     },
    //     pawn7: {
    //         x: 6,
    //         y: 1,
    //         symbol: '9817',
    //         isDead: false
    //     },
    //     pawn8: {
    //         x: 7,
    //         y: 1,
    //         symbol: '9817',
    //         isDead: false
    //     },
    // }

    // let blackTeamStartingPos = {
    //     rook1: {
    //         x: 0,
    //         y: 7,
    //         symbol: '9820',
    //         isDead: false
    //     },
    //     knight1: {
    //         x: 1,
    //         y: 7,
    //         symbol: '9822',
    //         isDead: false
    //     },
    //     bishop1: {
    //         x: 2,
    //         y: 7,
    //         symbol: '9821',
    //         isDead: false
    //     },
    //     queen: {
    //         x: 3,
    //         y: 7,
    //         symbol: '9819',
    //         isDead: false
    //     },
    //     king: {
    //         x: 4,
    //         y: 7,
    //         symbol: '9818',
    //         isDead: false
    //     },
    //     bishop2: {
    //         x: 5,
    //         y: 7,
    //         symbol: '9821',
    //         isDead: false
    //     },
    //     knight2: {
    //         x: 6,
    //         y: 7,
    //         symbol: '9822',
    //         isDead: false
    //     },
    //     rook2: {
    //         x: 7,
    //         y: 7,
    //         symbol: '9820',
    //         isDead: false
    //     },
    //     pawn1: {
    //         x: 0,
    //         y: 6,
    //         symbol: '9823',
    //         isDead: false
    //     },
    //     pawn2: {
    //         x: 1,
    //         y: 6,
    //         symbol: '9823',
    //         isDead: false
    //     },
    //     pawn3: {
    //         x: 2,
    //         y: 6,
    //         symbol: '9823',
    //         isDead: false
    //     },
    //     pawn4: {
    //         x: 3,
    //         y: 6,
    //         symbol: '9823',
    //         isDead: false
    //     },
    //     pawn5: {
    //         x: 4,
    //         y: 6,
    //         symbol: '9823',
    //         isDead: false
    //     },
    //     pawn6: {
    //         x: 5,
    //         y: 6,
    //         symbol: '9823',
    //         isDead: false
    //     },
    //     pawn7: {
    //         x: 6,
    //         y: 6,
    //         symbol: '9823',
    //         isDead: false
    //     },
    //     pawn8: {
    //         x: 7,
    //         y: 6,
    //         symbol: '9823',
    //         isDead: false
    //     },
    // }

    const [selectedPiece, setSelectedPiece] = useState({
        team: null,
        x: null,
        y: null,
        symbol: null,
        isDead: null
    })

    // const [whiteTeam, setWhiteTeam] = useState(whiteTeamStartingPos)
    // const [blackTeam, setBlackTeam] = useState(blackTeamStartingPos)

    // Piece position

    // const piecePlacement = (x, y) => {
    //     return Object.keys(whiteTeam).map(piece => {
    //         if (x == whiteTeam[piece].x && y == whiteTeam[piece].y && !whiteTeam[piece].isDead) return String.fromCharCode(whiteTeam[piece].symbol)
    //         if (x == blackTeam[piece].x && y == blackTeam[piece].y && !blackTeam[piece].isDead) return String.fromCharCode(blackTeam[piece].symbol)
    //     })
    // }

    // Piece movement 

    // const movePiece = (isWhite, piece, newX, newY) => {
    //     if (isWhite) {
    //         return setWhiteTeam({
    //             ...whiteTeam,
    //             [piece]: {
    //                 ...whiteTeam[piece],
    //                 x: newX,
    //                 y: newY,
    //             }
    //         })
    //     }
    //     return setBlackTeam({
    //         ...blackTeam,
    //         [piece]: {
    //             ...blackTeam[piece],
    //             x: newX,
    //             y: newY,
    //         }
    //     })
    // }

    // const movePiece2 = (team, setTeam, piece, newX, newY) => {
    //     return setTeam({
    //         ...team,
    //         [piece]: {
    //             ...team[piece],
    //             x: newX,
    //             y: newY,
    //         }
    //     })
    // }

    // const killPiece = (team, setTeam, piece) => {
    //     return setTeam({
    //         ...team,
    //         [piece]: {
    //             ...team[piece],
    //             isDead: true
    //         }
    //     })
    // }

    // const selectPiece = (x, y) => {
    //     if (selectedPiece) {
    //         movePiece(selectedPiece.team == 'white', selectedPiece.piece, x, y)
    //         setSelectedPiece(null)
    //     }
    //     Object.keys(whiteTeam).map(piece => {
    //         if (x == whiteTeam[piece].x && y == whiteTeam[piece].y && !whiteTeam[piece].isDead) return setSelectedPiece(Object.assign(whiteTeam[piece], { team: 'white', piece }))
    //         if (x == blackTeam[piece].x && y == blackTeam[piece].y && !blackTeam[piece].isDead) return setSelectedPiece(Object.assign(blackTeam[piece], { team: 'black', piece }))
    //     })
    // }

    // useEffect(() => {
    //     movePiece2(whiteTeam, setWhiteTeam, 'rook2', 4,4)
    //     movePiece(true, 'queen', 2, 2)
    //     movePiece(false,'knight1', 3,2)
    //     killPiece(blackTeam, setBlackTeam, 'bishop2')
    // }, [])

    // useEffect( () => console.log(selectedPiece), [selectedPiece])


    return (
        <View className={boardStyle.container}>

            {/* {array.map((row, i) => {
                return array.map((column, i) => {
                    return <View onClick={() => selectPiece(column, 7 - row)} className={(7 - column + row) % 2 == 0 ? boardStyle.blackTile : boardStyle.whiteTile} data-x={column} data-y={7 - row}>
                        <Text className={`${boardStyle.piece}`}>
                            {piecePlacement(column, 7 - row)}
                        </Text>
                    </View>
                })
            })} */}

        </View>
    )
}
