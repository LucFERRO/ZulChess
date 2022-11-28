import { StyleSheet } from 'react-native';

export const mobileStyle = StyleSheet.create({
    boardContainer: {
        flex: 1,
        padding: 100,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'ff0000'

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