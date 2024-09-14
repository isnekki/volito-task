import { useContext, createContext, type PropsWithChildren } from 'react'
import { useStorageState } from './useStorageState'
import { firebaseSignIn, firebaseSignUp } from '@/utils/fierbaseAuth'
import { User } from 'firebase/auth'
import { Alert } from 'react-native'

const AuthContext = createContext<{
    signIn: (email: string, password: string) => Promise<User | null>
    signOut: () => void
    signUp: (email: string, password: string) => Promise<User | null>
    session?: string | null
    isLoading: boolean
}>({
    signIn: async () => null,
    signOut: () => null,
    signUp: async () => null,
    session: null,
    isLoading: false
})

export function useSession() {
    const value = useContext(AuthContext)

    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error("useSession must be wrapped in a <SessionProvider />")
        }
    }
    
    return value
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session')

    return (
        <AuthContext.Provider
            value={{
                signIn: async (email: string, password: string) => {
                    try {
                        const credentials = await firebaseSignIn(email, password)
                        setSession(credentials.user.uid)
                        return credentials.user
                    } catch (e) {
                        Alert.alert("Error signing in", "Invalid credentials", [{ text: 'OK', style: 'default', onPress: () => null }])
                        return null
                    }
                },
                signOut: () => {
                    setSession(null)
                },
                signUp: async (email: string, password: string) => {
                    try {
                        const credentials = await firebaseSignUp(email, password)
                        setSession(credentials.user.uid)
                        return credentials.user
                    } catch (e) {
                        Alert.alert("Error creating account", "Invalid credentials", [{ text: 'OK', style: 'default', onPress: () => null }])
                        return null
                    }
                },
                session,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}