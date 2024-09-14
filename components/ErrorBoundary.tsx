import { View, Text, Button, StyleSheet } from 'react-native'
import { type ErrorBoundaryProps } from 'expo-router'


export default function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.sadFace}>{":("}</Text>
            <Text style={styles.errorHeader}>Whoops!</Text>
            <Text style={styles.errorBody}>Something went wrong</Text>
            <Text style={styles.errorBody}>{error.name}</Text>
            <Button title="Try again" onPress={retry} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#f2f2f7',
        padding: 40
    },
    errorHeader: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24
    },
    errorBody: {
        fontSize: 16,
        marginVertical: 20
    },
    sadFace: {
        fontSize: 40,
        marginVertical: 20
    }
})