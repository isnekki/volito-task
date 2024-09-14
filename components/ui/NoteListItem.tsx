import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import CountryFlag from "react-native-country-flag";
import Bookmark from '../../assets/svgs/bookmark.svg'
import { NoteProps } from "@/app/(app)/new-note";
import { router } from "expo-router";
import { NoteContext } from "@/contexts/NoteContext";
import { useContext } from "react";

type NoteListItemProps = {
    item: NoteProps
}

export default function NoteListItem({ item }: NoteListItemProps) {
    const { state, dispatch } = useContext(NoteContext)

    function handleNoteClick() {
        dispatch({ type: 'SET_NOTE', payload: item })
        console.log("Should be updated state: ", state, "Item passed: ", item)
        router.replace("/new-note")
    }

    return (
        <View id={item.id} style={styles.container}>
            <Bookmark style={styles.bookmark} width={18} height={22} fill={item.color || 'transparent'} />
            <TouchableHighlight activeOpacity={0.6} underlayColor='#E0E0E0' style={styles.noteContainer} onPress={handleNoteClick}>
                <>
                    <Text style={styles.date}>{new Date(item.date).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit'})}</Text>
                    <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.contentPreview}>{item.body}</Text>
                    <View style={styles.locationContainer}>
                        <CountryFlag isoCode={item.location.isoCountryCode} size={10} />
                        <Text style={styles.location}>{`${item.location.placeName}, ${item.location.isoCountryCode}`}</Text>
                    </View>
                </>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        marginBottom: 15,
        marginTop: 5,
    },
    noteContainer: {
        backgroundColor: '#E5E5EA',
        position: 'relative',
        borderRadius: 12,
        padding: 15,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        marginHorizontal: 5
    },
    title: {
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    contentPreview: {
        fontSize: 14,
        color: '#838383'
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    location: {
        fontSize: 10,
        color: '#838383',
        marginLeft: 5
    },
    date: {
        position: 'absolute',
        fontSize: 10,
        color: '#838383',
        top: 12,
        right: 12
    },
    bookmark: {
        position: 'absolute',
        top: -7,
        right: '20%',
        zIndex: 20
    }
})