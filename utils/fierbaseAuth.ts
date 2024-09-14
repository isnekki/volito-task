import { app } from '@/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, initializeAuth, getReactNativePersistence, onAuthStateChanged } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

const auth = initializeAuth(app, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) })


export function authSubscriber() {
    return auth.onAuthStateChanged(user => {
        if (user) {
            console.log(`User ${user.uid} is signed in.`)
        } else {
            console.log("No user is signed in")
            router.replace("/login")
        }
    })
}

export async function waitForAuthToInitialize() {
    return await auth.authStateReady()
}

export async function firebaseSignUp(email: string, password: string) {
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log("Credentials: ", credentials)
    return credentials
}

export async function firebaseSignIn(email: string, password: string) {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    return credentials
}

export async function firebaseSignOut() {
    await auth.signOut()
}

export function getCurrentUserUID(): string | undefined {
    return auth.currentUser?.uid
}