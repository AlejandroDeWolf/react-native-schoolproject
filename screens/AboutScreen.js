import { StyleSheet, View, Text } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.title}>Lyrics Wizard</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    aboutContainer: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#004643',
        width: '100%',
        height: '100%'
    },
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
    }
})

export default AboutScreen