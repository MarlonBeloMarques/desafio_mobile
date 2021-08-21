jest.mock('react-native-maps', () => {
  const React = require('react');
  const { View } = require('react-native');
  const MockMapView: React.FC<{ children: React.ReactNode }> = ({
    children,
    ...rest
  }) => <View {...rest}>{children}</View>;
  const MockMarker: React.FC<{ children: React.ReactNode }> = ({
    children,
    ...rest
  }) => <View {...rest}>{children}</View>;
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});
