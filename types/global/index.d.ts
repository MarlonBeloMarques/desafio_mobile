declare type Location = {
  id: string;
  latitude: number;
  longitude: number;
  altitude?: number | null;
};

declare type User = {
  name: string;
  email: string;
  location: Location;
};
