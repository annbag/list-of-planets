import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetDetails } from './planet-details.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetDetailsService {

  constructor(private httpClient: HttpClient) { }

  public getPlanetDetails(): Observable<PlanetDetails> {
    return this.httpClient.get<PlanetDetails>(`${environment.apiPlanetUrl}/planets/1/`);
  }
}
