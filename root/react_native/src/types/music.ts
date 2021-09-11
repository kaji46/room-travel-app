export type Music = {
  id: string;
  name: string;
  imageUrl: string;
  destination: DestinationRef;
};

type DestinationRef = {
  id: string;
  name: string;
};
