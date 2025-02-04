import { Platform, StyleSheet, StatusBar} from 'react-native'

export default StyleSheet.create({
    androidSafeAreaView: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#f2f2f7'
    }
})