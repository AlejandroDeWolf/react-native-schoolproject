import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TrackItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectTrack(props.title)}>
      <View style={styles.listItem}>
        <Image
          style={styles.trackCover}
          source={{
            uri: props.image,
          }}
        />
        <Text style={styles.trackTitle}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#001e1d',
    marginVertical: 10,
    borderRadius: 8,
    width: '94.6%'
  },
  trackCover: {
    width: 100,
    height: 100,
    borderRadius: 5
  },
  trackTitle: {
    paddingLeft: 10,
    color: '#fffffe',
    width: '80%'
  }
});
export default TrackItem;