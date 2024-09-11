import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import CountryFlag from "react-native-country-flag";

type NoteListItemProps = {
    item: {
        title: string,
        content: string,
        date: string,
        location: string,
        isoCode: string
    }
}

export default function NoteListItem({ item }: NoteListItemProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.noteContainer}>
                <Text style={styles.date}>{item.date}</Text>
                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.contentPreview}>{item.content}</Text>
                <View style={styles.locationContainer}>
                    <CountryFlag isoCode={item.isoCode} size={10} />
                    <Text style={styles.location}>{item.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15,
        marginTop: 5
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
        marginHorizontal: 5
    },
    title: {
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
    }
})