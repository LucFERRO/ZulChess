import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Board from './components/Board';
import { useMediaQuery } from 'react-responsive'

import { desktopStyle } from './styles/desktopStyle'
import { mobileStyle } from './styles/mobileStyle'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Desktop = ({ styles }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? <Board styles={styles} /> : null
}
const Tablet = ({ styles }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? <Board styles={styles} /> : null
}
const Mobile = ({ styles }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? <Board styles={styles} /> : null
}

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.container}>
                <Text>
                    Logs
                </Text>
            </View>
            <View style={styles.Boardcontainer} >
                <Board />
            </View>
            <View style={styles.container}>
                <Text>
                    Dead pieces
                </Text>
            </View>

            {/* <Desktop styles={desktopStyle}/> */}
            {/* <Tablet /> */}
            {/* <Mobile styles={mobileStyle} /> */}

            <StatusBar display='auto'/>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexBasis: 'auto',
        // width: windowWidth,
        alignItems: 'center',
        backgroundColor: '#3a30f2',
    },
    container: {
        flex: 1,
        flexShrink: 1,
        width: '100%',
        // height: '33.33%',
        // minHeight: '10%',
        backgroundColor: '#3a30f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Boardcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});
