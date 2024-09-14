import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import Animated, { useSharedValue, Easing, withTiming, useAnimatedStyle } from 'react-native-reanimated'
import { getNotes } from '@/utils/firebaseFirestore'
import Profile from '@/components/ui/Profile'
import NoteListView from '@/components/NoteListView'
import NoteMapView from '@/components/NoteMapView'
import SearchBar from '@/components/ui/SearchBar'
import FloatingActionButton from '@/components/ui/FloatingActionButton'

import List from '@/assets/svgs/list.svg'
import Map from '@/assets/svgs/map.svg'
import Sort from '@/assets/svgs/sort.svg'
import { NoteProps } from './new-note'
import SwapBar from '@/components/ui/SwapBar'
import { waitForAuthToInitialize } from '@/utils/fierbaseAuth'

export default function Index() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [userNotes, setUserNotes] = useState<NoteProps[]>([])
    const [isSortedAsc, setIsSortedAsc] = useState<boolean>(false)
    const [currentNoteIndex, setCurrentNoteIndex] = useState<number>(0)
    const [searchKeywords, setSearchKeywords] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        waitForAuthToInitialize().then((response) => {
            if (response === null) return
            (async () => {
                const { status } = await Location.requestForegroundPermissionsAsync()
                if (status !== 'granted') {
                    setErrorMsg("Permission to access location was denied.")
                    return
                }
    
                const location = await Location.getCurrentPositionAsync()
                setLocation(location)
            })();
            (async () => await queryNotes())();
        })
    }, [])


    const translateX = useSharedValue(0)

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.45, 0.4, 0.8),
    }

    const barStyle = useAnimatedStyle(() => (
        {
            transform: [{ translateX: withTiming(translateX.value, config)}]
        }
    ))

    const [isListView, setIsListView] = useState<boolean>(true)

    async function queryNotes() {
        const querySnapshot = await getNotes()
        if (!querySnapshot) { console.log("No query snapshot"); return }
        const notesData = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        const notes = notesData.map(doc => ({
            id: doc.id,
            title: doc.data.title,
            body: doc.data.body,
            color: doc.data.color,
            location: JSON.parse(doc.data.location),
            date: new Date(doc.data.date)
        }))
        setUserNotes(notes.sort((a, b) => b.date.valueOf() - a.date.valueOf()))
        setIsLoading(false)
    }

    function handleViewSwapOnClick(swapToListView: boolean) {
        if (swapToListView) translateX.value = 0
        else translateX.value = Dimensions.get("screen").width / 2 - 35

        setIsListView(swapToListView)
    }

    function onSearchbarChangeText(text: string) {
        setSearchKeywords(text)
    }

    function filterNotesByKeyword(notes: NoteProps[], searchKeywords: string) {
        return notes.filter(note => (
            note.title.toLowerCase().includes(searchKeywords.toLowerCase())
            || note.body.toLowerCase().includes(searchKeywords.toLowerCase())
            || note.date.toUTCString().toLowerCase().includes(searchKeywords.toLowerCase())
            || note.location.placeName.toLowerCase().includes(searchKeywords.toLowerCase())
            || note.location.isoCountryCode.toLowerCase().includes(searchKeywords.toLowerCase())
        ))
    }

    async function onListRefresh() {
        setIsLoading(true)
        await queryNotes()
        setIsLoading(false)
    }

    function cycleNotesInView(indexModifier: number) {
        if (userNotes.length <= 0) return

        let newIndex
        if (indexModifier === -1) {
            if (currentNoteIndex <= 0) {
                newIndex = userNotes.length - 1
            } else {
                newIndex = currentNoteIndex - 1
            }
        } else {
            if (currentNoteIndex >= userNotes.length - 1) {
                newIndex = 0
            } else {
                newIndex = currentNoteIndex + 1
            }
        }
        setCurrentNoteIndex(newIndex)
    }


    return (
        <View style={styles.container}>
            <Profile />
            <View id="main-header" style={styles.mainHeaderContainer}>
                <Text style={styles.headerText}>Notes</Text>
                <Text style={styles.notesCounterText}>{`${userNotes.length} note${userNotes.length === 1 ? '' : 's'}`}</Text>
            </View>
            <View style={styles.searchContainer}>
                { isListView ? <SearchBar autoCorrect={false} value={searchKeywords} onChangeText={onSearchbarChangeText} /> : <SwapBar currentNoteTitle={userNotes.length > 0 ? userNotes[currentNoteIndex].title : "No notes"} swapper={cycleNotesInView} /> }
                { 
                    isListView && 
                    <View  style={{ marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => setIsSortedAsc(!isSortedAsc)}>
                            <Sort width={25} height={25} fill="#000000" />
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <View style={styles.contentContainer}>
                <FloatingActionButton />
                {
                    isListView 
                    ? <NoteListView isLoading={isLoading} notes={filterNotesByKeyword(userNotes, searchKeywords).sort((a, b) => isSortedAsc ? a.date.valueOf() - b.date.valueOf() : b.date.valueOf() - a.date.valueOf())} 
                        onRefresh={onListRefresh}
                    />
                    : location && 
                        <NoteMapView 
                            notes={userNotes.sort((a, b) => b.date.valueOf() - a.date.valueOf())} 
                            initialLatitude={location?.coords.latitude} 
                            initialLongitude={location?.coords.longitude} 
                            currentNoteInView={userNotes[currentNoteIndex]}
                        />
                }
            </View>
            <View style={styles.bottomNavigationMenuContainer}>
                <Animated.View style={[styles.bottomNavigationMenuModeIndicator, barStyle]} />
                <View style={styles.bottomNavigationMenuButtonContainer}>
                    <TouchableOpacity style={styles.bottomNavigationMenuButton} onPress={() => handleViewSwapOnClick(true)}>
                        <List width={30} height={30} fill="#121212" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomNavigationMenuButton} onPress={() => handleViewSwapOnClick(false)}>
                        <Map width={30} height={30} fill="#121212" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        paddingTop: 25,
        paddingHorizontal: 35,
        paddingVertical: 25
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
    notesCounterText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: '#9D9D9D'
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
        marginBottom: 20
    },
    bottomNavigationMenuModeIndicator: {
        width: '50%',
        height: 5,
        backgroundColor: '#414E68',
        left: 0
    },
    bottomNavigationMenuContainer: {
        height: '7.5%',
    },
    bottomNavigationMenuButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    bottomNavigationMenuButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '50%'
    }
})

