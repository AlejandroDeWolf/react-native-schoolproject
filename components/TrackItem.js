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
    marginVertical: 5,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.5,
    flex: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  trackCover: {
    width: 100,
    height: 100,
  },
  trackTitle: {
    paddingLeft: 10,
    color: "white"
  }
});
export default TrackItem;