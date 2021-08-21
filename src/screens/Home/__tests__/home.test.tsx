import React from 'react';
import { render } from '@testing-library/react-native';
import { Marker } from 'react-native-maps';
import Home from '../Home';
import { hasLocationPermission } from '../permission';

describe('home map', () => {
  it('test if you have permission to obtain the location', async () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'ios',
    }));

    const permission = await hasLocationPermission();

    expect(permission).toBe(true);
  });

  it('test if its rendering the map', () => {
    const rendered = render(<Home />);

    expect(rendered.getByTestId('mapView')).toBeTruthy();
  });

  it('tests whether it is rendering the user position point', () => {
    const position = {
      coords: {
        latitude: 0,
        longitude: 0,
        accuracy: 0,
        altitude: 0,
        heading: 0,
        speed: 0,
      },
      timestamp: 0,
    };

    const rendered = render(<Home position={position} />);

    expect(rendered.UNSAFE_getByType(Marker)).toBeTruthy();
    expect(rendered.UNSAFE_getByType(Marker).props.coordinate).toBe(
      position.coords,
    );
  });
});
