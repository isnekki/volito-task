import { FlatList, StyleSheet, View, Text } from "react-native"
import NoteListItem from "./ui/NoteListItem"
import { NoteProps } from "@/app/(app)/new-note"
import { useState } from "react"
import SkeletonWrapper from "./ui/Skeleton"


function EmptyListView() {
    return (
        <View style={styles.emptyList}>
            <Text style={styles.emptyListText}>Its empty...</Text>
        </View>
    )
}

export default function NoteListView(props: { notes: NoteProps[], onRefresh: () => Promise<void>, isLoading: boolean }) {
    const loadingData = new Array(20).fill(null)

    const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

    return (
        <FlatList 
            refreshing={isRefreshing}
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer} 
            contentContainerStyle={{ flex: 1}}
            data={props.isLoading ? loadingData : props.notes} 
            renderItem={({item}) => props.isLoading ? <SkeletonWrapper /> : <NoteListItem item={item}/>}
            onRefresh={async () => {
                setIsRefreshing(true)
                await props.onRefresh()
                setIsRefreshing(false)
            }}
            ListEmptyComponent={EmptyListView}
        />
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        zIndex: 10,
        flex: 1,
        paddingHorizontal: 5,
    },
    separator: {
        height: 10,
        width: '100%'
    },
    emptyList: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    emptyListText: {
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        color: '#C7C7CC'
    }
})