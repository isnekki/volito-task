import { TextInput, View, Image, StyleSheet } from "react-native";
import Search from '@/assets/svgs/search.svg'

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <Search width={20} height={20} fill="#9D9D9D" />
            <TextInput 
                style={styles.textInput}
                placeholder="Search"
                placeholderTextColor="#9D9D9D"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#C7C7CC',
        borderRadius: 20,
        padding: 10,
        maxHeight: 40,
        width: '90%',
        height: '100%'
    },
    textInput: {
        display: 'flex',
        color: '#000000',
        marginLeft: 5, 
        fontSize: 16,
        flexGrow: 1
    }
})