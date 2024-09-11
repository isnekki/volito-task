import { FlatList, ScrollView, StyleSheet, View } from "react-native"
import NoteListItem from "./ui/NoteListItem"

export default function NoteListView() {
    const data = [
        {
            title: 'Title',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati quae reprehenderit atque expedita voluptate nihil nemo veritatis quisquam dicta.',
            location: 'Sheffield, UK',
            isoCode: 'gb',
            date: '11/12/24'
        },
        {
            title: 'Title',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati quae reprehenderit atque expedita voluptate nihil nemo veritatis quisquam dicta.',
            location: 'Sheffield, UK',
            isoCode: 'gb',
            date: '11/12/24'
        },{
            title: 'Title',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati quae reprehenderit atque expedita voluptate nihil nemo veritatis quisquam dicta.',
            location: 'Sheffield, UK',
            isoCode: 'gb',
            date: '11/12/24'
        },{
            title: 'Title',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati quae reprehenderit atque expedita voluptate nihil nemo veritatis quisquam dicta.',
            location: 'Sheffield, UK',
            isoCode: 'gb',
            date: '11/12/24'
        },{
            title: 'Title',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati quae reprehenderit atque expedita voluptate nihil nemo veritatis quisquam dicta.',
            location: 'Sheffield, UK',
            isoCode: 'gb',
            date: '11/12/24'
        },{
            title: 'Title',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati quae reprehenderit atque expedita voluptate nihil nemo veritatis quisquam dicta.',
            location: 'Sheffield, UK',
            isoCode: 'gb',
            date: '11/12/24'
        },{
            title: 'Title',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati quae reprehenderit atque expedita voluptate nihil nemo veritatis quisquam dicta.',
            location: 'Sheffield, UK',
            isoCode: 'gb',
            date: '11/12/24'
        },{
            title: 'Title',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati quae reprehenderit atque expedita voluptate nihil nemo veritatis quisquam dicta.',
            location: 'Sheffield, UK',
            isoCode: 'gb',
            date: '11/12/24'
        },{
            title: 'Title',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati quae reprehenderit atque expedita voluptate nihil nemo veritatis quisquam dicta.',
            location: 'Sheffield, UK',
            isoCode: 'gb',
            date: '11/12/24'
        },
    ]

    function ListSeparator() {
        return <View style={styles.separator} />
    }

    return (
        <FlatList 
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer} 
            data={data} 
            renderItem={({item}) => <NoteListItem item={item} />}
        />
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        zIndex: 10,
        flex: 1,
        paddingHorizontal: 5
    },
    separator: {
        height: 10,
        width: '100%'
    }
})