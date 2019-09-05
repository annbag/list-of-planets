import { Planet } from './../planet-details/planet.model';

export interface Planets {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<Planet>;
}
