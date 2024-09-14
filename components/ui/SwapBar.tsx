import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Left from '@/assets/svgs/left.svg'
import Right from '@/assets/svgs/right.svg'


export default function SwapBar(props: { currentNoteTitle: string, swapper: (indexModifier: number) => void }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.swapper(-1)}>
                <Left width={25} height={25} fill="#FFF" />
            </TouchableOpacity>
            <Text numberOfLines={1} style={styles.title}>{props.currentNoteTitle}</Text>
            <TouchableOpacity onPress={() => props.swapper(1)}>
                <Right width={25} height={25} fill="#FFF" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#414E68',
        borderRadius: 20,
        padding: 5,
        maxHeight: 40,
        width: '90%',
        height: '100%'
    },
    title: {
        width: '60%',
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        fontSize: 16,
        color: '#FFF'
    }
})