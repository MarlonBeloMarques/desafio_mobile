import analytics from '@react-native-firebase/analytics';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const sendUserLoginEvent = async (
  user: FirebaseAuthTypes.User,
): Promise<void> => {
  await analytics().logEvent('login_successfully', {
    email: user.email,
    creation_time: user.metadata.creationTime,
  });
};

export const sendRenderedMapEvent = async (
  screenName: string,
  regionMap: { latitude: number; longitude: number },
): Promise<void> => {
  await analytics().logEvent('rendered_map', {
    screen_name: screenName,
    region_map: regionMap,
  });
};
