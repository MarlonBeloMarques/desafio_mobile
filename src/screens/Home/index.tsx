import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import crashlytics from '@react-native-firebase/crashlytics';
import Home from './Home';
import { hasLocationPermission } from './permission';
import { getDatabasePath, saveUserInDatabase } from './realm';
import { sendRenderedMapEvent } from '../../utils/helpers/sendEvent';

const HomeContainer: React.FC = () => {
  const [myPosition, setMyPosition] = useState<Geolocation.GeoPosition>();

  let location: Location = {
    id: '',
    altitude: 0,
    longitude: 0,
    latitude: 0,
  };

  let user: User = {
    email: '',
    location,
  };

  const getLocation = useCallback(async () => {
    try {
      const hasPermission = await hasLocationPermission();

      if (!hasPermission) {
        return;
      }

      Geolocation.getCurrentPosition(
        (position) => {
          setMyPosition(position);
          getUser(position);
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
          timeout: 60000,
          maximumAge: 540000,
          distanceFilter: 0,
        },
      );
    } catch (error) {
      crashlytics().recordError(error);
    }
  }, [myPosition]);

  const getUserValue = async () => {
    const userValues = await AsyncStorage.getItem('@userValues');

    if (userValues) {
      return JSON.parse(userValues) as User;
    }

    return { email: '' };
  };

  const getUser = async (position: Geolocation.GeoPosition): Promise<void> => {
    try {
      location = {
        id: (await getUserValue()).email.toLowerCase(),
        altitude: position?.coords.altitude,
        longitude: position?.coords.longitude,
        latitude: position?.coords.latitude,
      };

      user = {
        email: (await getUserValue()).email.toLowerCase(),
        location,
      };

      setTimeout(() => {
        saveUserInDatabase(user);
      }, 10000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const consoleDatabasePath = async () => {
      console.log(await getDatabasePath());
    };

    consoleDatabasePath();

    setTimeout(() => {
      if (myPosition) {
        sendRenderedMapEvent('Home', {
          latitude: myPosition.coords.latitude,
          longitude: myPosition.coords.longitude,
        });
      }
    }, 1000);
  }, []);

  useEffect(() => {
    getLocation();
  });

  return <Home position={myPosition} />;
};

export default HomeContainer;
