import { Redirect, Slot } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';
import GlobalStyles from '@/utils/GlobalStyles';

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
        <SafeAreaView style={GlobalStyles.androidSafeAreaView}>
            <Slot />
            <StatusBar style="dark"/>
        </SafeAreaView>
    )
}