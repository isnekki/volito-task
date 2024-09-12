import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Plus from '@/assets/svgs/plus.svg'
import { router } from "expo-router";

export default function FloatingActionButton() {
    return (
        <TouchableOpacity style={styles.container} onPress={() => router.replace("/new-note")}>
            <Plus width={40} height={40} fill="#FFF" />
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
        elevation: 3
    },
    plus: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 64,
        color: '#FFFFFF',
        backgroundColor: 'red'
    }
})