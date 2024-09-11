import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Profile from '@/components/ui/Profile'
import NoteListView from '@/components/NoteListView'
import SearchBar from '@/components/ui/SearchBar'
import FloatingActionButton from '@/components/ui/FloatingActionButton'

export default function Index() {
    return (
        <View style={styles.container}>
            <Profile />
            <View id="main-header" style={styles.mainHeaderContainer}>
                <Text style={styles.headerText}>Notes</Text>
                <View style={styles.viewSwapperContainer}>
                    <TouchableOpacity>
                        <Image source={require('@/assets/images/list.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>                    
                    <TouchableOpacity>
                        <Image source={require('@/assets/images/map.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <SearchBar />
                <TouchableOpacity>
                    <Image source={require('@/assets/images/sorting.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                </TouchableOpacity>
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
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '25%'
    },
    headerText: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold'
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    contentContainer: {
        position: 'relative',
        flexGrow: 1,
    }
})

