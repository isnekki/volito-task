import { Redirect, Slot } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';

import { useSession } from '@/hooks/useSession';
import { StatusBar } from 'expo-status-bar';

export default function AppLayout() {
    const { session, isLoading } = useSession()

    if (isLoading) {
        return <Text>Loading</Text>
    }

    if (!session) {
        return <Redirect href="/login" />
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#f2f2f7'}}>
            <Slot />
            <StatusBar style="dark"/>
        </SafeAreaView>
    )
}