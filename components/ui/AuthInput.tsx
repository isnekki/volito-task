import { useState } from "react";
import { View, Text, TextInput, TextInputProps, StyleSheet, Image, TouchableOpacity } from "react-native";
import SetVisible from '@/assets/svgs/set-visible.svg'
import SetInvisible from '@/assets/svgs/set-invisible.svg'


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
                    ? props.secureTextEntry && <SetInvisible height={25} width={25} fill="#8F8F8F" />
                    : props.secureTextEntry && <SetVisible height={25} width={25} fill="#8F8F8F" />
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