import AuthInput from "@/components/ui/AuthInput";
import { useSession } from "@/hooks/useSession";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard, ActivityIndicator } from "react-native";

export default function Register() {
    const { signUp } = useSession()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = async (data: { email: string, password: string }) => {
        const user = await signUp(data.email, data.password)
        console.log(user)
        if (user !== null) router.replace("/")
    }

    return(
        <View id="container" style={styles.container}>
            <View id="circles-container">
                <View style={styles.darkBlueCircle}></View>
                <View style={styles.lightBlueCircle}></View>
                <View style={styles.redCircle}></View>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding": "height"} style={{ flex: 1 }}>
                    <ActivityIndicator animating={isLoading} style={styles.activityIndicator} />
                    <View style={styles.safeViewInnerContainer}>
                        <View id="login-header" style={styles.headerContainer}>
                            <Text style={styles.welcomeText}>Welcome</Text>
                            <Text style={styles.subtitleText}>Turn the best adventures into life-long memories</Text>
                        </View>
                        <View id="login-inputs" style={styles.inputContainer}>
                            <Controller
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <AuthInput 
                                        label="Your Email"
                                        placeholder='Enter your email'
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}  
                                    />
                                )}
                                name='email'
                            />
                            {errors.email && <Text style={{ color: 'red' }}>This field is required.</Text>}
                            <Controller
                                control={control}
                                rules={{ required: true, minLength: 8 }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <AuthInput 
                                        label="Your Password"
                                        placeholder='Enter your password'
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        secureTextEntry
                                    />
                                )}
                                name='password'
                            />
                            {errors.password && <Text style={{ color: 'red' }}>This field is required.</Text>}
                            <TouchableOpacity style={styles.signInButton} disabled={errors.password !== undefined || errors.email !== undefined} onPress={handleSubmit(onSubmit)}>
                                <Text style={styles.signInButtonText}>Create account</Text>
                            </TouchableOpacity>
                            <Text>Already have an account? <Link style={styles.createAccountLink} href='/login'>Sign In</Link></Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    redCircle: {
        position: 'absolute',
        transform: [
            { translateX: -50 },
            { translateY: -150 }
        ],
        backgroundColor: '#983732',
        borderRadius: 500,
        width: 270,
        height: 270
    },
    lightBlueCircle: {
        position: 'absolute',
        transform: [
            { translateX: 50 },
            { translateY: -150 }
        ],
        backgroundColor: '#8CC4E0',
        borderRadius: 500,
        width: 330,
        height: 330
    },
    darkBlueCircle: {
        position: 'absolute',
        transform: [
            { translateX: 150 },
            { translateY: -150 }
        ],
        backgroundColor: '#414E68',
        borderRadius: 500,
        width: 380,
        height: 380
    },
    safeViewInnerContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 48
    },
    headerContainer: {
        width: '100%'
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '50%',
    },
    welcomeText: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold',
    },
    subtitleText: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },
    signInButton: {
        backgroundColor: '#414E68',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 47,
        width: '100%'
    },
    signInButtonText: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    createAccountLink: {
        color: "#132744",
        textDecorationLine: 'underline',
        textDecorationColor: '#132744'
    },
    activityIndicator: {
        position: 'absolute',
        left: '50%',
        transform: [
            { translateX: -10 }
        ],
        top: '15%'
    }
})