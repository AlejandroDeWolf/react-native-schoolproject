import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TrackDetails = props => {
  const [trackDetails, setTrackDetails] = useState({})

  const getTrackDetails = async () => {
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
        setTrackDetails(response);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getTrackDetails(); //toon upcomming songs bij begin scherm
    // console.log(trackDetails.images);
  }, []);

  // useEffect(() => {
  //   console.log(tracks); //toon upcomming songs bij begin scherm
  // }, [tracks]);


  return (
    <View style={styles.trackDetails}>
      {trackDetails.images != undefined ? <Image //short if statement, != betekent is het niet gelijk aan undefined. Hiermee wil ik checken of de property "images" gedefined is
        // Is images niet == undefined? Laat dan de image tag zien. Is images == undefined? Laat dan null (niets) zien. 
        // = CONDITIONAL RENDERING
        style={styles.trackDetailsCover}
        source={{
          uri: trackDetails.images.coverarthq,
        }}
      /> : null}
      <Text styles={styles.titleDetails}>
        Track: {trackDetails.title}
      </Text>
      <Text styles={styles.subtitleDetails}>
        Artist: {trackDetails.subtitle}
      </Text>
      {/* CONDITIONAL RENDERING */}
      {trackDetails.genres != undefined ? <Text styles={styles.genreDetails}>
        Genre: {trackDetails.genres.primary}
      </Text>
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  trackDetails: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.5,
  },
  trackDetailsCover: {
    width: "100%",
    height: "70%",
  },
  titleDetails: {

  }
});
export default TrackDetails;