import { Component, OnInit } from '@angular/core';
import { PlanetsListService } from './planets-list.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  public planetsList;

  constructor(private planetsListService: PlanetsListService) { }

  ngOnInit() {
    this.getPlanets();
  }

  private getPlanets() {
    this.planetsListService.getPlanets()
    .subscribe(planets => {
      this.planetsList = planets;
      console.log(this.planetsList);
    });
  }
}
