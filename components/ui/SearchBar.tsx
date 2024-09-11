import { TextInput, View, Image, StyleSheet } from "react-native";

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/search.png')} style={{ height: 20, width: 20 }} />
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
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#C7C7CC',
        borderRadius: 20,
        padding: 10,
    },
    textInput: {
        marginLeft: 5, 
        fontSize: 16
    }
})