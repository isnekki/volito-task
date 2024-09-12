import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Profile from '@/components/ui/Profile'
import NoteListView from '@/components/NoteListView'
import SearchBar from '@/components/ui/SearchBar'
import FloatingActionButton from '@/components/ui/FloatingActionButton'

import Animated, { useSharedValue, Easing, withTiming, useAnimatedStyle } from 'react-native-reanimated'

import List from '@/assets/svgs/list.svg'
import Map from '@/assets/svgs/map.svg'
import Sort from '@/assets/svgs/sort.svg'
import { useEffect, useState } from 'react'

export default function Index() {
    const translateX = useSharedValue(0)

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.45, 0.4, 0.8),
    }

    const style = useAnimatedStyle(() => (
        {
            transform: [{ translateX: withTiming(translateX.value, config) }]
        }
    ))

    const [isListView, setIsListView] = useState<boolean>(true)

    function handleViewSwapOnClick(swapToListView: boolean) {
        if (swapToListView) translateX.value = 0
        else translateX.value = 59

        setIsListView(swapToListView)
    }


    return (
        <View style={styles.container}>
            <Profile />
            <View id="main-header" style={styles.mainHeaderContainer}>
                <Text style={styles.headerText}>Notes</Text>
                <View style={styles.viewSwapperContainer}>
                    <TouchableOpacity style={styles.viewSwapperButton} onPress={() => handleViewSwapOnClick(true)}>
                        <List width={25} height={25} fill="#000000" />
                    </TouchableOpacity>                    
                    <TouchableOpacity style={styles.viewSwapperButton} onPress={() => handleViewSwapOnClick(false)}>
                        <Map width={25} height={25} fill="#000000" />
                    </TouchableOpacity>
                    <Animated.View style={[styles.viewSwapperCircle, style]} />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <SearchBar />
                <View  style={{ marginLeft: 10 }}>
                    <TouchableOpacity>
                        <Sort width={25} height={25} fill="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <FloatingActionButton />
                <NoteListView />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        paddingTop: 25,
        paddingHorizontal: 35
    },
    mainHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#121212',
        width: '100%'
    },
    viewSwapperContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '25%',
        height: '100%',
        padding: 5,
        backgroundColor: 'red'
    },
    viewSwapperButton: {
        zIndex: 20
    },
    viewSwapperCircle: {
        position: 'absolute',
        backgroundColor: '#414E68',
        borderRadius: 500,
        right: 59,
        transform:[{
            translateX: 0
        }],
        zIndex: 0,
        height: 35,
        width: 35
    },
    headerText: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold'
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginVertical: 20
    },
    contentContainer: {
        position: 'relative',
        flexGrow: 1,
    }
})

