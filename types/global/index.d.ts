declare type Location = {
  id: string;
  latitude: number;
  longitude: number;
  altitude?: number | null;
};

declare type User = {
  email: string;
  location: Location;
};
