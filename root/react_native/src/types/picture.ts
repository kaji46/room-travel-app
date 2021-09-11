export type Picture = {
  id: string;
  name: string;
  url: string;
  destination: DestinationRef;
};

type DestinationRef = {
  id: string;
  name: string;
};
