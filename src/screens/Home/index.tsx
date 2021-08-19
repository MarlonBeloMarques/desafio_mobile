import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Home from './Home';
import { hasLocationPermission } from './permission';

const HomeContainer: React.FC = () => {
  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  };
  useEffect(() => {
    getLocation();
  });

  return <Home />;
};

export default HomeContainer;
