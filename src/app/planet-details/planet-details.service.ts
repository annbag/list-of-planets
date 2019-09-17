import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetDetails } from './planet-details';

@Injectable({
  providedIn: 'root'
})
export class PlanetDetailsService {

  constructor(private httpClient: HttpClient) { }

  public getPlanetDetails(id): Observable<PlanetDetails> {
    const url = `${environment.apiPlanetUrl}${id}/`;
    return this.httpClient.get<PlanetDetails>(url);
  }
}
