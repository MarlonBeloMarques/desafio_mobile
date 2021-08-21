import { UpdateMode } from 'realm';
import { LocationSchema, UserSchema } from '../../schemas';
import getRealm from '../../services/realm';

export const getDatabasePath = async (): Promise<string> => {
  const realm = await getRealm();

  return realm.path;
};

const saveInDtabase = async (
  schema: typeof UserSchema | typeof LocationSchema,
  data: any,
): Promise<void> => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.create(schema.schema.name, data, UpdateMode.Modified);
    });
  } catch (error) {
    console.log(error);
  }
};

export const saveUserInDatabase = (user: User): void => {
  saveInDtabase(UserSchema, user);
};

export const saveLocationInDatabase = (location: Location): void => {
  saveInDtabase(LocationSchema, location);
};
