import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

import { Tile } from '../classes/Tiles'
import { Piece, King, Queen, Rook, Knight, Bishop, Pawn } from '../classes/Pieces'

import { initialBoard } from '../initialization/positions/classic';

const windowWidth = Dimensions.get('window').width;

export default function Board() {

    const [chessboard, setChessboard] = useState(initialBoard)
    const [selectedTile, setselectedTile] = useState({
        tile: null,
        piece: null
    })

    useEffect(() => {
        console.table(chessboard)
    }, [])

    useEffect(() => {
        selectedTile.piece && console.log('selectedTile: ', selectedTile)
    }, [selectedTile])

    const handleTileClick = (tile) => {
        if (!selectedTile.piece && tile.getPiece()) return setselectedTile({
            tile: tile,
            piece: tile.getPiece()
        })
        if (selectedTile.piece && !tile.getPiece()) {
            tile.setPiece(selectedTile.piece)
            selectedTile.tile.removePiece()
            return setselectedTile({
                tile: null,
                piece: null
            })
        }
    }

    return (
        <View
            // showsVerticalScrollIndicator={false} 
            style={styles.boardContainer}>
            {chessboard && Object.keys(chessboard).map((tile, i) => {
                return <Pressable onPress={() => handleTileClick(chessboard[tile])} >
                    <View key={i} style={[styles.tile, chessboard[tile].isBlack() ? styles.blackTile : styles.whiteTile]}>
                        <Text style={styles.tileText}>
                            {chessboard[tile].getPiece() && String.fromCharCode(chessboard[tile].getPiece().getSymbol())}
                            {/* {tile} */}
                        </Text>
                    </View>
                </Pressable>
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