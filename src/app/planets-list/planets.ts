import { PlanetDetails } from '../planet-details/planet-details';

export interface PlanetListPage {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<PlanetDetails>;
}
