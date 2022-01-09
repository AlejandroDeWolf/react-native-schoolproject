import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import LyricsDetails from '../components/LyricsDetails';

const LyricsScreen = ({ route, navigation }) => {

  const { trackId } = route.params;
  

  return (
    <View style={styles.screen}>
      <LyricsDetails
      trackId={trackId}
      />
      <Button
        title="Go back to homescreen"
        onPress={() => navigation.navigate('Homepage')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default LyricsScreen;