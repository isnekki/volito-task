import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
    androidSafeAreaView: {
        flex: 1,
        paddingVertical: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#f2f2f7'
    }
})