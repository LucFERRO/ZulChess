import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

import { Tile } from '../classes/Tiles'
import { Piece, King, Queen, Rook, Knight, Bishop, Pawn } from '../classes/Pieces'

import { completePieceList } from '../initialization/pieces/all32pieces'
console.log('All 32 pieces:', completePieceList)

import { initialBoard } from '../initialization/positions/classic';
console.log('Initial board with all 64 tiles:', initialBoard)

const windowWidth = Dimensions.get('window').width;

export default function Board({ }) {

    const [chessboard, setChessboard] = useState()
    const [selectedPiece, setSelectedPiece] = useState()

    const setPiece = (piece, x, y) => {
        if (!chessboard) return

        chessboard[Object.keys(chessboard).filter(tile => chessboard[tile].getCoordinates().x == x && chessboard[tile].getCoordinates().y == y)].setPiece(piece)
    }

    useEffect(() => {
        setChessboard(initialBoard)
    }, [])

    // chessboard && console.log(chessboard)

    // setPiece()

    return (
        <View
            // showsVerticalScrollIndicator={false} 
            style={styles.boardContainer}>
            {chessboard && Object.keys(chessboard).map((tile, i) => {
                return <View key={i} style={[styles.tile, chessboard[tile].isBlack() ? styles.blackTile : styles.whiteTile]}>
                    <Text style={styles.tileText}>
                        {chessboard[tile].getPiece() && String.fromCharCode(chessboard[tile].getPiece().getSymbol())}
                        {/* {tile} */}
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