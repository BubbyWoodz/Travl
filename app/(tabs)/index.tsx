import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1IjoiYnViYnl3b29keiIsImEiOiJjbWp5cjZxcXQwOHVtM2RxM2Nqb2k2cWNjIn0.ZC6CezrQajf2S_q-DVuUyA');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map}>
        <Mapbox.Camera
          zoomLevel={12}
          centerCoordinate={[-122.4324, 37.7749]}
        />
      </Mapbox.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
