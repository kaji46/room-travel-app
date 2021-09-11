import { Destination } from "./destination";

export type RootStackParamList = {
  Home: undefined;
  Destination: { destination: Destination };
  User: undefined;
  // CreateReview: { shop: Shop };
  Main: undefined;
  Search: undefined;
};
