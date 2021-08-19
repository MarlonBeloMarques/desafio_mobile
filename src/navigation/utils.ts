import { NavigationProp } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export const signOut = async (
  navigation: NavigationProp<any, any>,
): Promise<void> => {
  try {
    await auth().signOut();
    navigation.goBack();
  } catch (error) {
    navigation.goBack();
  }
};
