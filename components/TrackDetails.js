import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
    //toon upcomming songs bij begin scherm
    getTrackDetails();
    // console.log(trackDetails.images);
  }, []);

  return (
    <View style={styles.trackDetails}>

      {trackDetails.images != undefined ? <Image
        //short if statement, != betekent is het niet gelijk aan undefined. Hiermee wil ik checken of de property "images" gedefined is
        // Is images NIET gelijk aan undefined? Laat dan de image tag zien. Is images == undefined? Laat dan null (niets) zien. 
        // = CONDITIONAL RENDERING
        style={styles.trackDetailsCover}
        source={{
          uri: trackDetails.images.coverarthq,
        }}
      /> : null}

      <Text style={styles.track}>
        {trackDetails.title}
      </Text>

      <Text style={styles.subtitle}>
        Artist: {trackDetails.subtitle}
      </Text>

      {trackDetails.genres != undefined ? <Text style={styles.genre}>
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
    width: '100%'
  },
  trackDetailsCover: {
    width: "100%",
    height: "70%",
  },
  track: {
    color: "#fffffe",
    fontSize: 26,
    textAlign: "center",
    marginTop: 10
  },
  subtitle: {
    color: "#fffffe",
    fontSize: 20,
    textAlign: "left",
    marginTop: 20
  },
  genre: {
    color: "#fffffe",
    fontSize: 20,
    textAlign: "left"
  }
});
export default TrackDetails;