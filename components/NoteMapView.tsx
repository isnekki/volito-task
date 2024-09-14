import { NoteProps } from "@/app/(app)/new-note"
import { NoteContext } from "@/contexts/NoteContext"
import { router } from "expo-router"
import React, { useContext, createRef, useState, Ref, RefObject, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Easing } from "react-native"
import MapView, { AnimatedRegion, Callout, Details, Marker, Region } from "react-native-maps"

type MapViewProps = {
    initialLatitude: number
    initialLongitude: number
    currentNoteInView: NoteProps
    notes: NoteProps[]
}


function NoteMarker(props: { note: NoteProps, onCalloutClick: () => void }) {
    return (
        <Marker 
            coordinate={{
                latitude: props.note.location.latitude,
                longitude: props.note.location.longitude
            }}
            pinColor={props.note.color || "#FFFFFF"}         
        >
            <Callout tooltip onPress={props.onCalloutClick}>
                <View style={styles.callout}>
                    <Text style={styles.date}>{new Date(props.note.date).toLocaleDateString("en-US", { year: '2-digit', month: '2-digit', day: '2-digit' })}</Text>
                    <Text numberOfLines={1} style={styles.title}>{props.note.title}</Text>
                    <Text numberOfLines={1} style={styles.body}>{props.note.body}</Text>
                    <View style={styles.locationContainer}>
                        <Text numberOfLines={1} style={styles.location}>{`${props.note.location.placeName}`}</Text>
                        <Text style={styles.location}>{`, ${props.note.location.isoCountryCode}`}</Text>
                    </View>
                </View>
            </Callout>
        </Marker>
    )
}

export default function NoteMapView(props: MapViewProps) {
    const mapRef = createRef<MapView>()
    const { state, dispatch } = useContext(NoteContext)

    function handleCalloutClick(note: NoteProps) {
        dispatch({ type: "SET_NOTE", payload: note })
        router.replace("/new-note")
    }

    useEffect(() => {
        if (!props.currentNoteInView) return;
        animateToRegion(props.currentNoteInView.location.latitude, props.currentNoteInView.location.longitude)
    }, [props.currentNoteInView])


    function animateToRegion(latitude: number, longitude: number) {
        if (mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            }, 500)
        }
    }

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: props.initialLatitude,
                    longitude: props.initialLongitude,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5
                }}
                showsUserLocation
                followsUserLocation={false}
                loadingEnabled
            >
                {
                    props.notes.map((note, index) => (
                        <NoteMarker key={index} note={note} onCalloutClick={() => handleCalloutClick(note)} />
                    ))
                }
                {/* <NoteMarker note={{
                    title: 'jsabdnjhabsjdhbasjhdbjhasbdhjasbhjdbasjdbjhasbdjhbasjhdbahjsbda',
                    body: 'asjdnajshkbdnjhabfhjgsbahjsfbajhsbfjhabsfjhabsjhfbajhsfbjhasbfjhbashjfbajhsfba',
                    location: {
                        latitude: props.initialLatitude,
                        longitude: props.initialLongitude,
                        placeName: 'ajshdbjhasbdjhabshjdbjahsbdhjasbdhjas',
                        isoCountryCode: 'PH'
                    },
                    date: new Date(),
                    color: 'transparent',
                    id: ''
                }} /> */}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden'
    },
    map: {
        width: '100%',
        height: '100%',
    },
    callout: {
        position: 'relative',
        borderRadius: 20,
        backgroundColor: '#f2f2f7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 250,
        height: 100,
        padding: 15
    },
    date: {
        position: 'absolute',
        fontSize: 10,
        right: 0,
        top: 0,
        marginTop: 10,
        marginRight: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '60%'
    },
    body: {
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        height: 25
    },
    location: {
        fontSize: 10
    }
})