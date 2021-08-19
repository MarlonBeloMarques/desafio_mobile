export default class LocationSchema {
  static schema = {
    name: 'Location',
    primaryKey: 'id',
    properties: {
      id: { type: 'string', indexed: true },
      latitude: 'double',
      longitude: 'double',
      altitude: 'double',
    },
  };
}
