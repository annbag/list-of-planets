import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planets } from './planets.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsListService {

  constructor(private httpClient: HttpClient) { }

  public getPlanets(): Observable<Array<Planets>> {
    return this.httpClient.get<Array<Planets>>(`${environment.apiPlanetUrl}/planets`);
  }
}
