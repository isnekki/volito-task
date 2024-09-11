import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function FloatingActionButton() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 500,
        width: 75,
        height: 75,
        zIndex: 20,
        bottom: 0,
        right: 0,
        backgroundColor: "#414E68",
    },
    plus: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 64,
        color: '#FFFFFF'
    }
})