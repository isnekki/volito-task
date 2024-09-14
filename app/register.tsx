import AuthInput from "@/components/ui/AuthInput";
import { useSession } from "@/hooks/useSession";
import { uploadToFirestore } from "@/utils/firebaseFirestore";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import { Link, router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard, ActivityIndicator } from "react-native";
import { NoteProps } from "./(app)/new-note";

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
        setIsLoading(true)
        const user = await signUp(data.email, data.password)
        if (user !== null) {
            await addWelcomeNoteToNewUser(user.uid)
            router.replace("/")
        }
        setIsLoading(false)
    }

    async function addWelcomeNoteToNewUser(uid: string) {
        const welcomeNote: NoteProps = {
            id: uuidv4(),
            title: "Welcome to Noted!",
            location: {
                longitude: 16.4095,
                latitude: 120.5992,
                placeName: "Baguio",
                isoCountryCode: "PH"
            },
            body: "### Noted is a Markdown Note-taking app!\nRight now, you're in **Markdown Mode**, this allows you to see your note in the *pretty* format of Markdown!\nThere are multiple parts to a Note:\n 1. First is the **Title** at the top where you can add a title to your note.\n\n 2. Next is the **body** of your note, here is where you can view the note in Markdown with **Markdown Mode** or edit the Note in **Edit Mode**. To start editing, click on the first button to the left of your **Taskbar** to switch to **Edit Mode**.\n\n 3. After that, you have your **Taskbar** at the bottom. Here is where you can **toggle Markdown mode and Edit mode**, **add a color** to your Note tag, add an **Image**, or **delete** your Note.\n\n *Images will look like so:*\n\n ![notey](https://firebasestorage.googleapis.com/v0/b/volito-task-e86b7.appspot.com/o/images%2FsAlrJiieaQYUIIqWKOghU3MqV3y2%2F90d7851e-aa9e-4dd6-8abb-f7d8a028cb2f.png?alt=media&token=75f83d97-d46e-4668-8eb4-7a497f447aad)\n\n 4. Last is the **Date** at the top left, there you can edit the date of this Note!.\n\n You can find the rest of the Markdown syntax [here!](https://www.markdownguide.org/basic-syntax/)\n\n***Have fun Notetaking! - Notey***",
            date: new Date(),
            color: "#8CC4E0"
        }
        await uploadToFirestore(welcomeNote, uid)
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