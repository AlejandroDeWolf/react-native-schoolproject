import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
        //toon upcomming songs bij begin scherm
        getLyricsDetails();
        // console.log(lyricsDetails.images);
    }, []);

    return (
        <View style={styles.lyricsDetails}>

            {/* CONDITIONAL RENDERING  */}
            {lyricsDetails.sections != undefined ?
                <Text style={{ color: "white", marginBottom: 40 }}>
                    {lyricsDetails.sections[1].text}
                </Text>
                : null}
            {/* : betekent else */}

        </View>
    );
}

const styles = StyleSheet.create({
});
export default LyricsDetails;