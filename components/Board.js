import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;


import { Tile } from '../classes/Tiles'

export default function Board({ }) {

    const [chessboard, setChessboard] = useState({})
    let letters = 'ABCDEFGH'.split('')

    useEffect(() => {

        let fullBoard = {}
        // let letters = 'ABCDEFGH'.split('')

        for (let j = 0; j < 8; j++) {
            for (let i = 0; i < 8; i++) {
                window[`Tile${i}${j}`] = new Tile(i, j)
                fullBoard[`tile${letters[i]}${j + 1}`] = window[`Tile${i}${j}`]
            }
        }

        setChessboard(fullBoard)

    }, [])

    console.log(chessboard)

    return (
        <View
            // showsVerticalScrollIndicator={false} 
            style={styles.boardContainer}
        >
            {chessboard && Object.keys(chessboard).map((tile,i) => {
                return <View key={i} style={[styles.tile, chessboard[tile].isBlack() ? styles.blackTile : styles.whiteTile]}><Text>{i}</Text></View>
            })}
        </View>
    )
}

const boardWidth = 340

const styles = StyleSheet.create({
    boardContainer: {
        // width: windowWidth*0.8,
        // maxWidth: windowWidth*0.8,
        // height: windowWidth*0.8,
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
        justifyContent: 'center'
    },

    whiteTile: {
        backgroundColor: '#F5F5DC',
    },

    blackTile: {
        backgroundColor: '#800000',
    }

})