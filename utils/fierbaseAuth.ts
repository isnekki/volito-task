import { app } from '@/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const auth = initializeAuth(app, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) })


export async function firebaseSignUp(email: string, password: string) {
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log("Credentials: ", credentials)
    return credentials
}

export async function firebaseSignIn(email: string, password: string) {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    return credentials
}