import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';

import TrackItem from '../components/TrackItem';

const HomeScreen = ({ navigation }) => {

  const [tracks, setTrack] = useState([])

  const getChart = async () => {
    await fetch("https://shazam-core.p.rapidapi.com/v1/charts/world?limit=10", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "shazam-core.p.rapidapi.com",
        "x-rapidapi-key": "ec7910eedcmshaf701257a7297d2p13387fjsnd445c46555ed"
      }
    })
      .then(response => response.json())
      .then(response => {
        let tracks = [];
        // for of, gaat heel de lijst af, want er is geen index zoals in een normale for loop. "response" is een array, dit heb ik gezien in de logs. trackData is 1 opbject binnen de response van de api
        for (const trackData of response) {
          // console.log(trackData); trackData bekijken
          // Hier bepaal ik welke data ik nodig heb uit de array response van de api. Dit doe ik omdat er bij de search functie een andere vorm van data formatting wordt gebruikt, namemlijk een extra "heading"
          tracks.push({
            id: trackData.id, //kom recht uit de api, namelijk de id
            title: trackData.title,
            image: trackData.images.coverart
          })
        }
        // console.log(JSON.stringify(response)); // testen van data api
        setTrack(tracks)
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    // toon world chart songs bij begin scherm
    getChart();
  }, []);


  const getSongByTitle = async (enteredText) => { // argument meegegeven door onChangeText
    if (enteredText.length > 3) {
      const url = encodeURI("https://shazam-core.p.rapidapi.com/v1/tracks/search?query=" + enteredText);
      //console.log(url);
      await fetch(url, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "shazam-core.p.rapidapi.com",
          "x-rapidapi-key": "ec7910eedcmshaf701257a7297d2p13387fjsnd445c46555ed"
        }
      })
        .then(response => response.json())
        .then(response => {
          let tracks = [];
          // for of, gaat heel de lijst af, want er is geen index zoals in een normale for loop. "response" is een array, dit heb ik gezien in de logs. trackData is 1 opbject binnen de response van de api
          for (const trackData of response) {
            // console.log(trackData); trackData bekijken
            tracks.push({
              // Hier bepaal ik welke data ik nodig heb uit de array response van de api. Dit doe ik omdat er bij de search functie een andere vorm van data formatting wordt gebruikt, namemlijk een extra "heading"
              id: trackData.id, //kom recht uit de api, namelijk de id
              title: trackData.heading.title,
              image: trackData.images.default
            })
          }
          // console.log(JSON.stringify(response)); // testen van data api
          setTrack(tracks)
        })
        .catch(err => {
          console.error(err);
        });
    } else if (enteredText.length === 0) {
      getChart();
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchbox}
        onChangeText={getSongByTitle}
        placeholder="Search song"
      />

      <FlatList
        data={tracks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TrackItem
            id={item.id}
            title={item.title}
            image={item.image}
            // selected Id was de nummer van het item in de array, dit is nu item.id, dit zorgt ervoor dat we de id pakken van het huidige item dat overeenkomt met de id in de api
            onSelectTrack={() => { navigation.navigate('Details', { trackId: item.id }) }}
          />)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004643',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  searchbox: {
    fontSize: 20,
    fontWeight: '300',
    padding: 10,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 40
  }
});

export default HomeScreen;