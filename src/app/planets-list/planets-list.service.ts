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

  public getPlanets(nrPage): Observable<Array<PlanetListPage>> {
    const url = `${environment.apiPlanetUrl}?page=${nrPage}`;
    return this.httpClient.get<Array<PlanetListPage>>(url);
  }
}
