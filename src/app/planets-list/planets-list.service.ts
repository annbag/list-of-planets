import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetListPage } from './planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetsListService {

  constructor(private httpClient: HttpClient) { }

  public getPlanets(): Observable<Array<PlanetListPage>> {
    const url = `${environment.apiPlanetUrl}/planets/`;
    return this.httpClient.get<Array<PlanetListPage>>(url);
  }
}
