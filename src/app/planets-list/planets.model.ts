import { PlanetDetails } from './../planet-details/planet-details.model';

export interface Planets {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<PlanetDetails>;
}
