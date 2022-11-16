import { StyleSheet, Text, View } from 'react-native';

export default function Board() {
  return (
    <View>
        <Text 
        // className=
        // {styles.blue}
        // {test.blue}
        style={style.blue}
        >
            This is the board
        </Text>
    </View>
  )
}

const style = StyleSheet.create({
    blue: {
        // flex: 1,
        backgroundColor: "#000A18",
        color: '#ff0000',
        
    }
})