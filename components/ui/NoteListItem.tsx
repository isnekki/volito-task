import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import CountryFlag from "react-native-country-flag";
import Bookmark from '../../assets/svgs/bookmark.svg'

type NoteListItemProps = {
    item: {
        title: string,
        content: string,
        date: string,
        location: string,
        isoCode: string,
        color?: string
    }
}

export default function NoteListItem({ item }: NoteListItemProps) {
    return (
        <View style={styles.container}>
            <Bookmark style={styles.bookmark} width={18} height={22} fill={item.color || 'transparent'} />
            <TouchableHighlight activeOpacity={0.6} underlayColor='#E0E0E0' style={styles.noteContainer} onPress={() => console.log('Pressed!')}>
                <>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.contentPreview}>{item.content}</Text>
                    <View style={styles.locationContainer}>
                        <CountryFlag isoCode={item.isoCode} size={10} />
                        <Text style={styles.location}>{item.location}</Text>
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