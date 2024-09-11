import { useSession } from '@/hooks/useSession'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Index() {
    const { signOut } = useSession()

    return (
        <View>
            <Text>Hello signout!</Text>
            <Button title="sign out" onPress={() => signOut()} />
        </View>
    )
}

