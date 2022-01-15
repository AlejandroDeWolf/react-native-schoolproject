import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-web';

const LyricsDetails = props => {
    const [lyricsDetails, setLyricsDetails] = useState({})

    const getLyricsDetails = async () => {
        // console.log(typeof props.trackId);
        const url = encodeURI("https://shazam-core.p.rapidapi.com/v1/tracks/details?track_id=" + props.trackId)
        await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "shazam-core.p.rapidapi.com",
                "x-rapidapi-key": "ec7910eedcmshaf701257a7297d2p13387fjsnd445c46555ed"
            }
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                setLyricsDetails(response);
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        getLyricsDetails(); //toon upcomming songs bij begin scherm
        // console.log(lyricsDetails.images);
    }, []);

    // useEffect(() => {
    //   console.log(tracks); //toon upcomming songs bij begin scherm
    // }, [tracks]);


    return (
        <View style={styles.lyricsDetails}>

            {/* CONDITIONAL RENDERING  */}
            {lyricsDetails.sections != undefined ?
                <Text styles={styles.lyricsDetails}>
                    {lyricsDetails.sections[1].text}
                </Text>
                : null}
            {/* : betekent else */}

        </View>
    );
}

const styles = StyleSheet.create({
    lyricsDetails: {
        padding: 10,
        marginVertical: 5,
        borderColor: 'grey',
        borderStyle: 'dashed',
        borderWidth: 0.5,
    },
    lyricsDetailsCover: {
        width: "100%",
        height: "70%",
    },
    titleDetails: {

    }
});
export default LyricsDetails;