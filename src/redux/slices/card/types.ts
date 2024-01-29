import { OriginLocationType } from "../character/types";

export enum StatusCard {
  UNKNOWN = "unknown",
  ALIVE = "Alive",
  DEAD = "Dead",
}

export interface CardSliceState {
  id: number;
  name: string;
  status: StatusCard;
  species: string;
  type: string;
  gender: string;
  origin: OriginLocationType;
  location: OriginLocationType;
  image: string; //TODO
  episode: string[]; //TODO
  url: string; //TODO
  created: string;
  className?: any;
}
