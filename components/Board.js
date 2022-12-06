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
    const [selectedTile, setselectedTile] = useState(null)

    useEffect(() => {
        console.table(chessboard)
    }, [])

    useEffect(() => {
        selectedTile && console.log('selectedTile: ', selectedTile)
        // console.table(chessboard)
    }, [selectedTile])

    const clearSelection = () => {
        Object.keys(chessboard).forEach(tile => chessboard[tile].switchIsMovableTo(false))
        return setselectedTile(null)
    }

    const possibleMovement = (clickedTile) => {
        if (!clickedTile.getPiece()) return
        clickedTile.getPiece().legalMovementFrom(clickedTile, chessboard)
    }

    const handleTileClick = (tile) => {
        if (!selectedTile && tile.getPiece()) {
            possibleMovement(tile)
            return setselectedTile(tile)
        }
        if (selectedTile && selectedTile.getPiece() && !tile.getPiece()) {
            if (!tile.getIsMovableTo()) return console.log('Illegal move.')
            tile.setPiece(selectedTile.getPiece())
            selectedTile.removePiece()
            clearSelection()
        }
        if (selectedTile && selectedTile.getPiece() && tile.getPiece()) {
            //If clicking on the selected piece, unselect
            if (selectedTile.getPiece() == tile.getPiece()) return clearSelection()

            //If clicking on an other piece from the same team, change selected piece
            if (selectedTile.getPiece().getTeam() == tile.getPiece().getTeam()) {
                clearSelection()
                possibleMovement(tile)
                return setselectedTile(tile)
            }

            //If clicking on an enemy piece within legal movement, attack
            if (tile.getIsMovableTo()) {
                tile.getPiece().death()
                tile.setPiece(selectedTile.getPiece())
                selectedTile.removePiece()
                clearSelection()
            }
        }
    }

    return (
        <View
            // showsVerticalScrollIndicator={false} 
            style={styles.boardContainer}>
            {chessboard && Object.keys(chessboard).map((tile, i) => {
                return <Pressable key={i} onPress={() => handleTileClick(chessboard[tile])} >
                    <View style={[styles.tile, chessboard[tile].isBlack() ? styles.blackTile : styles.whiteTile]}>
                        <Text style={styles.tileText}>
                            {chessboard[tile].getPiece() && String.fromCharCode(chessboard[tile].getPiece().getSymbol())}
                            {/* {`x=${chessboard[tile].x}, y=${chessboard[tile].y}`} */}
                        </Text>
                        {chessboard[tile].getIsMovableTo() && <View style={styles.legalMovementTile}></View>}
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
        position: 'relative',
        borderWidth: 3,
        borderColor: 'transparent'
    },
    // legalMovementTile: {
    //     borderWidth: 3,
    //     borderColor: '#FF8919'
    // },
    legalMovementTile: {
        width: boardWidth / 16,
        height: boardWidth / 16,
        borderRadius: 50,
        backgroundColor: '#FF8919',
        position: 'absolute',
        top: '25%',
        left: '20%'
    },
    tileText: {
        fontSize: 30,
        color: 'black'
    },
    whiteTile: {
        backgroundColor: '#F5F5DC',
    },
    blackTile: {
        backgroundColor: '#800000',
    }
})