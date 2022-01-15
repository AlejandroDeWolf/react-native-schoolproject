import { StyleSheet, View, Text } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.title}>Lyrical Miracle</Text>

            <Text style={styles.intro}>
                Lyrical Miracle celebrates More Than The Music—the lyrics, the stories behind the songs, and the creative connections that meaningfully drive culture.
            </Text>

            <Text style={styles.about}>
                We champion curiosity and believe that everyone has music knowledge to share: insights, intel, and musings that make us more informed, engaged music lovers. As the world's biggest music encyclopedia with a passionate community of more than two million contributors, Lyrical Miracle is a destination for artists, creatives, and superfans to discuss and deconstruct all things music.
            </Text>

            <Text style={styles.about}>
                Through our original content, technology, and live & virtual experiences, Lyrical Miracle spotlights the artists who are shaping music culture across every genre and musical discipline, sharing the stories behind their creativity and craft in their own words.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutContainer: {
        padding: 20,
        backgroundColor: '#004643',
        width: '100%',
        height: '100%'
    },
    title: {
        color: '#fffffe',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 20
    },
    intro: {
        color: '#fffffe',
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20
    },
    about: {
        color: "#abd1c6",
        fontSize: 16,
        marginBottom: 20
    }
})

export default AboutScreen