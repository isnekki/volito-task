import { useState } from "react";
import { View, Text, TextInput, TextInputProps, StyleSheet, Image, TouchableOpacity } from "react-native";

interface AuthInputProps extends TextInputProps {
    label: string,
}

export default function AuthInput(props: AuthInputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(props.secureTextEntry || false)

    function handlePasswordVisibilityOnPress() {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TouchableOpacity style={styles.passwordVisibilityButton} onPress={handlePasswordVisibilityOnPress}>
                {
                    isPasswordVisible
                    ? props.secureTextEntry && <Image style={styles.passwordVisibilityButtonIcon} source={require("@/assets/images/set-invisible.png")} />
                    : props.secureTextEntry && <Image style={styles.passwordVisibilityButtonIcon} source={require("@/assets/images/set-visible.png")} />
                }
            </TouchableOpacity>
            <TextInput 
                textContentType="oneTimeCode"
                style={styles.textInput}
                placeholderTextColor="#88888b"
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                onBlur={props.onBlur}
                value={props.value}
                autoCorrect={false}
                secureTextEntry={isPasswordVisible}
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
        position: 'relative',
        backgroundColor: 'transparent',
        borderColor: '#d9d9d9',
        borderRadius: 8,
        borderWidth: 1,
        fontSize: 16,
        padding: 16,
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 10
    },
    passwordVisibilityButton: {
        position: 'absolute',
        zIndex: 10,
        top: '50%',
        left: '95%',
        transform: [
            { translateX: -25 },
            { translateY: 2}
        ],
    },
    passwordVisibilityButtonIcon: {
        width: 25,
        height: 25,
    }
})