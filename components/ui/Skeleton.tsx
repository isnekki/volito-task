import { StyleSheet, View } from 'react-native';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';

const Spacer = ({ height = 16 }) => <View style={{ height }} />;

export default function SkeletonWrapper() {
    return (
        <View style={styles.container}>
            <MotiView style={styles.noteContainer}>
                <Skeleton colorMode="light" radius="round" height={20} width="80%" />
                <Spacer height={12} />
                <Skeleton colorMode="light" height={14} width="100%" />
                <Spacer height={10} />
                <Skeleton colorMode="light" height={10} width="30%"/>
            </MotiView>   
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
    }
})