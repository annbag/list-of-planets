import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsListService {

  constructor(private httpClient: HttpClient) { }

  public getPlanets(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${environment.apiPlanetUrl}/planets`);
  }
}
