import { useSession } from "@/hooks/useSession";
import { firebaseSignOut } from "@/utils/fierbaseAuth";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';

export default function Profile() {
    const { signOut } = useSession()
    const translateX = useSharedValue<number>(0)
    const opacity = useSharedValue<number>(0)

    function handleProfilePress() {
        if (translateX.value === 0) {
            translateX.value = 60
            opacity.value = 1
        } else {
            translateX.value = 0
            opacity.value = 0
        }
    }

    async function handleSignOut() {
        signOut()
        await firebaseSignOut()
    }

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1)
    }

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: withTiming(translateX.value, config) }
            ],
            opacity: withTiming(opacity.value, config)
        }
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
                <Image source={require("@/assets/images/user.png")} style={{ height: 45, width: 45 }} />
            </TouchableOpacity>
            <Animated.View style={[styles.signOutContainer, style]}>
                <TouchableOpacity onPress={handleSignOut}>
                    <Text style={styles.signOutButton}>Sign Out</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row'
    },
    profileButton: {
        zIndex: 10,
        backgroundColor: '#f2f2f7'
    },
    signOutContainer: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        transform: [
            { translateX: 0 }
        ]
    },
    signOutButton: {
        fontSize: 16,
        color: 'red'
    }
})