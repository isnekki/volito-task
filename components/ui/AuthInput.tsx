import { View, Text, TextInput, TextInputProps, StyleSheet } from "react-native";

interface AuthInputProps extends TextInputProps {
    label: string,
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput 
                style={styles.textInput}
                placeholderTextColor="#88888b"
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                onBlur={props.onBlur}
                value={props.value}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%'
    },
    textInput: {
        backgroundColor: 'transparent',
        borderColor: '#d9d9d9',
        borderRadius: 8,
        borderWidth: 1,
        fontSize: 16,
        padding: 16,
        width: '100%'
    },
    label: {
        fontSize: 16,
        marginBottom: 10
    }
})