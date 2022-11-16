import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Tile } from '../classes/Tiles'

export default function Board() {

    const [chessboard, setChessboard] = useState({})

    useEffect(() => {

        let fullBoard = {}
        let letters = 'ABCDEFGH'.split('')

        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                window[`Tile${i}${j}`] = new Tile(i, j)
                fullBoard[`tile${letters[i]}${j + 1}`] = window[`Tile${i}${j}`]
            }
        }

        setChessboard(fullBoard)
        
    }, [])

    return (
        <View showsVerticalScrollIndicator={false} style={styles.boardContainer}>
            {chessboard && Object.keys(chessboard).map((tile,i) => {
                return <View key={i} style={[styles.tile, chessboard[tile].isBlack() ? styles.blackTile : styles.whiteTile]}></View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1,
        padding: 100,
        width: '50vw',
        minWidth: 1200,
        flexDirection: 'row',
        flexWrap: 'wrap'

    },

    tile: {
        flex: 1,
        minWidth: '12%',
        maxWidth: '12%',
        aspectRatio: 1 / 1,
        justifyContent: "center",
        alignItems: "center"
    },

    whiteTile: {
        backgroundColor: '#F5F5DC',
    },

    blackTile: {
        backgroundColor: '#800000',
    }

})