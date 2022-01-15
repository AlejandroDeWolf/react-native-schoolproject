import { StyleSheet, View, Button } from 'react-native';

import TrackDetails from '../components/TrackDetails';

const DetailsScreen = ({ route, navigation }) => {

  const { trackId } = route.params;


  return (
    <View style={styles.screen}>
      <TrackDetails
        trackId={trackId}
      />
      <Button
        title="Read Lyrics"
        onPress={() => navigation.navigate('Lyrics', { trackId: trackId })}
        color="#f9bc60"
        width="100%"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#004643',
    padding: 20
  }
});

export default DetailsScreen;