export default class UserSchema {
  static schema = {
    name: 'User',
    primaryKey: 'email',
    properties: {
      email: { type: 'string', indexed: true },
      name: 'string',
      location: 'Location',
    },
  };
}
