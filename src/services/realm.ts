import Realm from 'realm';
import { LocationSchema, UserSchema } from '../schemas';

const getRealm = (): ProgressPromise =>
  Realm.open({
    schema: [UserSchema, LocationSchema],
  });

export default getRealm;
