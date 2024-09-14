import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView,  ActivityIndicator, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import { useSession } from '@/hooks/useSession'
import AuthInput from '@/components/ui/AuthInput'
import { Link, router } from 'expo-router'
import { useState } from 'react'


export default function Login() {
    const { signIn } = useSession()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data: { email: string, password: string }) => {
        setIsLoading(true)
        const user = await signIn(data.email, data.password)
        if (user !== null) router.replace("/")
        setIsLoading(false)
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
                            <Text style={styles.welcomeText}>Welcome back</Text>
                            <Text style={styles.subtitleText}>Turn the best adventures into life-long memories</Text>
                        </View>
                        <View id="login-inputs" style={styles.inputContainer}>
                            <Controller
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <AuthInput 
                                        label="Email"
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
                                rules={{ required: true }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <AuthInput 
                                        label="Password"
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
                                <Text style={styles.signInButtonText}>Sign In</Text>
                            </TouchableOpacity>
                            <Text>Don't have an account? <Link style={styles.createAccountLink} href='/register'>Create account</Link></Text>
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
        height: '100%',
        width: '100%'
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