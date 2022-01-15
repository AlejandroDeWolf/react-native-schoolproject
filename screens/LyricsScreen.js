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
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#004643'
  }
});

export default LyricsScreen;