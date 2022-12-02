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

    const clearSelection = () => {
        Object.keys(chessboard).forEach( tile => chessboard[tile].switchIsMovableTo(false))
        return setselectedTile({
            tile: null,
            piece: null
        })
    }

    const possibleMovement = (clickedTile) => {
        if (!clickedTile.getPiece()) return
        clickedTile.getPiece().legalMovementFrom(clickedTile, chessboard)
    }

    const handleTileClick = (tile) => {
        if (!selectedTile.piece && tile.getPiece()) {
            possibleMovement(tile)
            return setselectedTile({
                tile: tile,
                piece: tile.getPiece()
            })
        }
        if (selectedTile.piece && !tile.getPiece()) {
            if (!tile.getIsMovableTo()) return console.log('Illegal move')
            tile.setPiece(selectedTile.piece)
            selectedTile.tile.removePiece()
            clearSelection()
        }
        if (selectedTile.piece && tile.getPiece()) {
            if (selectedTile.piece == tile.getPiece()) return clearSelection()
            console.log('Tile already taken!')
        }
    }

    return (
        <View
            // showsVerticalScrollIndicator={false} 
            style={styles.boardContainer}>
            {chessboard && Object.keys(chessboard).map((tile, i) => {
                return <Pressable key={i} onPress={() => handleTileClick(chessboard[tile])} >
                    <View style={[styles.tile, chessboard[tile].isBlack() ? styles.blackTile : styles.whiteTile, (chessboard[tile].getIsMovableTo()) && styles.legalMovementTile]}>
                        <Text style={styles.tileText}>
                            {chessboard[tile].getPiece() && String.fromCharCode(chessboard[tile].getPiece().getSymbol())}
                            {/* {`x=${chessboard[tile].x}, y=${chessboard[tile].y}`} */}
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
    legalMovementTile: {
        borderWidth: 3,
        borderColor: '#00C04B'
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