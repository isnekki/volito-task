import { Redirect, Slot } from "expo-router"
import { useSession } from "@/hooks/useSession"
import { SafeAreaView, Text } from "react-native"
import { StatusBar } from "expo-status-bar"

export default function NewNoteLayout() {
    const { session, isLoading } = useSession()

    if (isLoading) {
        return <Text>Loading</Text>
    }

    if (!session) {
        return <Redirect href="/login" />
    }
    
    return (
        <SafeAreaView>
            <Slot />
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}