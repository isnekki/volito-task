import { Redirect, Slot } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';
import GlobalStyles from '@/utils/GlobalStyles';
import { useSession } from '@/hooks/useSession';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { authSubscriber } from '@/utils/fierbaseAuth';

export default function AppLayout() {
    const { session, isLoading } = useSession()

    useEffect(() => {
        authSubscriber()
    }, [])

    if (isLoading) {
        return <View style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Text>Getting your Notes ready...</Text></View>
    }

    console.log(session)

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