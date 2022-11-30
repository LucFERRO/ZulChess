import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

import { Tile } from '../classes/Tiles'
import { King, Queen, Rook, Knight, Bishop, Pawn } from '../classes/Pieces'

// import teamTemplate from '../positions/Classic';
// console.log(teamTemplate)

import initialState from '../positions/Classic'
console.log(initialState)

const windowWidth = Dimensions.get('window').width;

export default function Board({ }) {

    const [chessboard, setChessboard] = useState()
    const [selectedPiece, setSelectedPiece] = useState()

    let letters = 'ABCDEFGH'.split('')

    const setPiece = (piece, x, y) => {
        if (!chessboard) return

        chessboard[Object.keys(chessboard).filter(tile => chessboard[tile].getCoordinates().x == x && chessboard[tile].getCoordinates().y == y)].setPiece(piece)
    }

    let kingTest = new King('WhiteKing', true)
    let kingTest2 = new King('BlackKing', false)

    useEffect(() => {

        let fullBoard = {}

        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                window[`Tile${i}${7 - j}`] = new Tile(i, 7 - j)
                fullBoard[`${letters[i]}${7 - j + 1}`] = window[`Tile${i}${7 - j}`]
            }
        }
        window[`Tile${4}${4}`].setPiece(kingTest)
        window[`Tile${4}${5}`].setPiece(kingTest2)
        setChessboard(fullBoard)
    }, [])

    console.log(chessboard)

    // setPiece()

    return (
        <View
            // showsVerticalScrollIndicator={false} 
            style={styles.boardContainer}>
            {chessboard && Object.keys(chessboard).map((tile, i) => {
                return <View key={i} style={[styles.tile, chessboard[tile].isBlack() ? styles.blackTile : styles.whiteTile]}>
                    <Text style={styles.tileText}>
                        {chessboard[tile].getPiece() && String.fromCharCode(chessboard[tile].getPiece().getSymbol())}
                    </Text>
                </View>
            })}
        </View>
    )
}

const boardWidth = 340

const styles = StyleSheet.create({
    boardContainer: {
        width: boardWidth,
        height: boardWidth,
        backgroundColor: "red",
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    tile: {
        width: boardWidth / 8,
        height: boardWidth / 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tileText: {
        fontSize: 35,
        color: 'black'
    },
    whiteTile: {
        backgroundColor: '#F5F5DC',
    },
    blackTile: {
        backgroundColor: '#800000',
    }
})