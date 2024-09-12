import { View, StyleSheet, Text } from "react-native"
import MapView from "react-native-maps"

type MapViewProps = {
    latitude: number
    longitude: number
}

export default function NoteMapView(props: MapViewProps) {
    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: props.latitude,
                    longitude: props.longitude,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5
                }}
                showsUserLocation
                followsUserLocation
            />
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
    }
})