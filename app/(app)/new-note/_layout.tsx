import { Redirect, Slot } from "expo-router"
import { useSession } from "@/hooks/useSession"
import { SafeAreaView, Text } from "react-native"
import { StatusBar } from "expo-status-bar"
import GlobalStyles from "@/utils/GlobalStyles"
import { NoteContextProvider } from "@/contexts/NoteContext"

export default function NewNoteLayout() {  
    return (
        <Slot />
    )
}