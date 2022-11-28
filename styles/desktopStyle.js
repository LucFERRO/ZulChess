import { StyleSheet } from 'react-native';

export const desktopStyle = StyleSheet.create({
    boardContainer: {
        flex: 1,
        padding: 100,
        width: '50vw',
        minWidth: 1200,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
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