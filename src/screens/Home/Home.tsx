import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { MapWrapper } from './styles';

type Props = {
  position?: Geolocation.GeoPosition;
};

const Home: React.FC<Props> = ({ position }) => (
  <MapWrapper>
    <MapView
      testID="mapView"
      style={{ flex: 1 }}
      initialRegion={{
        latitude: position ? position.coords.latitude : 37.78825,
        longitude: position ? position.coords.longitude : -122.4324,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    >
      {position && (
        <Marker coordinate={position.coords} title="Your real-time location" />
      )}
    </MapView>
  </MapWrapper>
);

export default Home;
