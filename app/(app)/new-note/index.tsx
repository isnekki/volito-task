import { View, Text, StyleSheet, TouchableHighlight, TextInput, Alert, Keyboard, TouchableWithoutFeedback, ScrollView, ActivityIndicator, Platform } from "react-native";
import { router } from "expo-router";
import * as Location from 'expo-location'
import { useContext, useEffect, useState } from "react";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'

import Back from '@/assets/svgs/back.svg'
import Gallery from '@/assets/svgs/add-image.svg'
import Delete from '@/assets/svgs/delete.svg'
import Markdown from "react-native-markdown-display";
import MarkdownView from "@/assets/svgs/markdown.svg"
import TextView from "@/assets/svgs/text.svg"
import { GetBlobFromURI, GetURIFromMediaLibrary } from "@/utils/ImagePickerUtils";
import { firebaseUpload } from "@/utils/firebaseStorage";
import { deleteNote, updateNote, uploadToFirestore } from "@/utils/firebaseFirestore";
import { NoteContext } from "@/contexts/NoteContext";

function ColorSelector(props: { callback: (color: string) => void }) {
    return (
        <View style={styles.colorSelectorContainer}>
            <View style={styles.colorSelectorSectionContainer}>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0" onPress={() => props.callback("#ff453a")}><View style={[styles.colorSelector, { backgroundColor: "#ff453a" }]} /></TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0" onPress={() => props.callback("#ff9f0a")}><View style={[styles.colorSelector, { backgroundColor: "#ff9f0a" }]} /></TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0" onPress={() => props.callback("#ffd60a")}><View style={[styles.colorSelector, { backgroundColor: "#ffd60a" }]} /></TouchableHighlight>
            </View>
            <View style={styles.colorSelectorSectionContainer}>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0" onPress={() => props.callback("#30d158")}><View style={[styles.colorSelector, { backgroundColor: "#30d158" }]} /></TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0" onPress={() => props.callback("#66d4cf")}><View style={[styles.colorSelector, { backgroundColor: "#66d4cf" }]} /></TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0" onPress={() => props.callback("#5e5ce6")}><View style={[styles.colorSelector, { backgroundColor: "#5e5ce6" }]} /></TouchableHighlight>
            </View>
        </View>
    )
}


export type NoteProps = {
    id: string
    title: string
    color?: string
    location: {
        longitude: number
        latitude: number
        placeName: string
        isoCountryCode: string
    },
    body: string
    date: Date
}

export default function Note() {
    const { state, dispatch } = useContext(NoteContext)
    const [note, setNote] = useState<NoteProps>(state)
    const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false)
    const [isMarkdownView, setIsMarkdownView] = useState<boolean>(state.id.length > 0)
    const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied.')
                return
            }

            const location = await Location.getCurrentPositionAsync()
            const place = await Location.reverseGeocodeAsync(location.coords)
            setNote({...note, location: { longitude: location.coords.longitude, latitude: location.coords.latitude, placeName: place[0].name ?? "Somewhere", isoCountryCode: place[0].isoCountryCode ?? "E" }})
            setIsLoading(false)
        })();
    }, [])

    function uploadPickedImageAndSetURL() {
        setIsLoading(true)
        GetURIFromMediaLibrary().then(image => {
            if (!image) return;
            if (image.uri !== undefined) GetBlobFromURI(image.uri).then(blob => {
                firebaseUpload(blob, image.fileName ?? uuidv4(),  (downloadURL) => setNote({...note, body: note.body + `\n\n![image](${downloadURL})`}))
                .then(() => setIsLoading(false))
            })
        })
    }

    async function saveNoteToDatabase() {
        setIsLoading(true)
        if (note.id.length > 0) {
            await updateNote(note)
        } else {
            await uploadToFirestore(note)
        }
        dispatch({ type: "REMOVE_NOTE" })
        setIsLoading(false)
    }

    async function deleteNoteFromDatabase() {
        setIsLoading(true)
        await deleteNote(note)
        dispatch({ type: "REMOVE_NOTE" })
        setIsLoading(false)
    }

    function handleOnChangeText(text: string) {
        setNote({...note, body: text})
    }

    function handleOnDatePicked(_: DateTimePickerEvent, selectedDate: Date | undefined) {
        setIsDatePickerOpen(false)
        if (selectedDate) {
            setNote({...note, date: selectedDate})
        }
    }

    function handleOnColorPicked(color: string) {
        setIsColorPickerOpen(false)
        setNote({...note, color })
    }

    function handleDeleteAlert() {
        return Alert.alert(
            'Delete this note', 
            'Are you sure you want to delete this note?', 
            [
                { text: 'Cancel', style: 'cancel', onPress: () => null }, 
                { text: 'OK', style: 'destructive', onPress: async () => {
                    await deleteNoteFromDatabase()
                    router.replace("/")
                } }
            ],
            {
                cancelable: true
            }
        )
    }

    function handleDoneAlert() {
        return Alert.alert(
            'Confirm save',
            'Save this note?',
            [
                { text: 'Cancel', style: 'cancel', onPress: () => null },
                { text: 'Save', style: 'default', onPress: async () => {
                    await saveNoteToDatabase()
                    router.replace("/")
                }}
            ],
            {
                cancelable: true
            }
        )
    }

    function handleReturnToNotes() {
        if (note.id.length >= 0 && state.body !== note.body || state.title !== note.title || state.color !== note.color) {
            return Alert.alert(
                'Discard changes?',
                'Are you sure you want to discard your changes?',
                [
                    { text: 'Cancel', style: 'cancel', onPress: () => null },
                    { text: 'Discard', style: 'destructive', onPress: () => {
                        dispatch({ type: "REMOVE_NOTE" })
                        router.replace("/")
                    }}
                ]
            )
        } else {
            dispatch({ type: "REMOVE_NOTE" })
            router.replace("/")
        }
    }

    return (
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
            <View style={styles.topHeader}>
                <TouchableHighlight underlayColor="#F2F2F7" style={styles.backToNotesButton} onPress={handleReturnToNotes}>
                    <>
                        <Back width={25} height={25} fill="#121212" />
                        <Text style={styles.topHeaderText}>Notes</Text>
                    </>
                </TouchableHighlight>
                <ActivityIndicator style={styles.activityIndicator} animating={isLoading} />
                <TouchableHighlight underlayColor="#F2F2F7" onPress={handleDoneAlert}>
                    <Text style={styles.topHeaderText}>Done</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.contentContainer}>
                <View>
                    <View style={styles.subHeader}>
                        {
                            Platform.OS === 'ios'
                            ? <DateTimePicker mode="date" value={note.date} maximumDate={new Date()} onChange={handleOnDatePicked}/>
                            : <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0"  onPress={() => setIsDatePickerOpen(true)}>
                                <View style={styles.dateContainer}>
                                    {isDatePickerOpen && <DateTimePicker mode="date" value={note.date} maximumDate={new Date()} onChange={handleOnDatePicked}/> }
                                    <Text style={styles.subHeaderText}>{note.date.toLocaleDateString("en-US", { year: 'numeric', month:'long', day:'numeric'})}</Text>
                                </View>
                            </TouchableHighlight>
                        }
                        <View style={styles.locationContainer}>
                            <Text numberOfLines={1} style={styles.subHeaderText}>{`${note.location.placeName}`}</Text>
                            <Text numberOfLines={1} style={styles.subHeaderText}>{`, ${note.location.isoCountryCode}`}</Text>
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <TextInput 
                            style={styles.titleInput} 
                            placeholder="Title" 
                            placeholderTextColor="#C7C7CC" 
                            value={note.title}
                            onChangeText={(text) => setNote({...note, title: text})}
                        />
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    {
                        isMarkdownView 
                        ? <Markdown>
                            {note.body}
                        </Markdown>
                        : <TextInput style={styles.bodyInput} multiline value={note.body} onChangeText={handleOnChangeText} />
                    }
                </View>
            </View>
            <View style={styles.footerContainer}>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0" onPress={() => setIsMarkdownView(!isMarkdownView)}>
                    {
                        isMarkdownView 
                        ? <TextView width={25} height={25} fill="#000" />
                        : <MarkdownView width={25} height={25} fill="#000" />
                    }
                </TouchableHighlight>
                { isColorPickerOpen && <ColorSelector callback={handleOnColorPicked}/> }
                <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0" onPress={() => setIsColorPickerOpen(true)}>
                    <View style={[styles.colorSelector, { backgroundColor: note.color }]}></View>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0" onPress={uploadPickedImageAndSetURL}>
                    <Gallery width={25} height={25} fill="#000" />
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.6} underlayColor="#F0F0F0" onPress={handleDeleteAlert}>
                    <Delete width={30} height={30} fill="#FF3B30" />
                </TouchableHighlight>
            </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
    },
    topHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    backToNotesButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    topHeaderText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        marginLeft: 0,
        marginRight: 35,
        marginVertical: 10
    },
    contentContainer: {
        flex: 1,
        marginHorizontal: 25,
    },
    footerContainer: {
        position: 'relative',
        height: '25%',
        maxHeight: 85,
        marginHorizontal: 25,
        borderTopColor: '#121212',
        borderTopWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    subHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    dateContainer: {
        backgroundColor: '#C7C7CC',
        borderRadius: 500,
        paddingVertical: 5,
        paddingHorizontal: 10,
        
    },
    locationContainer: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end',
        flexDirection: 'row', 
        width: '40%', 
        height: '100%',
        marginRight: 5
    },
    subHeaderText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16
    },
    titleContainer: {
        borderBottomColor: '#C7C7CC',
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    titleInput: {
        fontSize: 32
    },
    bodyContainer: {
        flex: 1,
        overflow: 'scroll',
        paddingVertical: 15
    },
    bodyInput: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        fontSize: 16,
        flexGrow: 1,
        width: '100%',
        textAlignVertical: 'top'
    },
    colorSelector: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        height: 25,
        width: 25,
        borderRadius: 500
    },
    colorSelectorContainer: {
        backgroundColor: '#F2F2F7',
        width: '30%',
        height: '100%',
        position: 'absolute',
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        top: '-110%',
        left: '21.5%'
    },
    colorSelectorSectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '50%',
    },
    activityIndicator: {
        position: 'absolute',
        left: '50%',
        transform: [
            { translateX: -10 }
        ]
    }
})