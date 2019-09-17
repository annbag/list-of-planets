import { Component, OnInit } from '@angular/core';
import { PlanetsListService } from './planets-list.service';
import { PlanetListPage } from './planets';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  public perPage: number;
  public planetsList;
  public nrPage: number;
  public pages: Array<number> = [];
  public totalPages: number;

  constructor(private planetsListService: PlanetsListService) { }

  ngOnInit() {
    this.nrPage = 1;
    this.perPage = 10;
    this.getPlanets();
  }

  private getPlanets() {
    this.planetsListService.getPlanets(this.nrPage)
    .subscribe(planets => {
      this.planetsList = planets;
      this.calculatePages();
      console.log(this.planetsList);
    });
  }

  public goToPrevPage(event: Event) {
    event.preventDefault();
    if (this.nrPage > 1) {
      this.nrPage--;
      console.log(this.nrPage);
    }
  }

  public goToNextPage(event: Event) {
    event.preventDefault();
    if (this.nrPage < this.totalPages) {
      this.nrPage++;
      console.log(this.nrPage);
    }
  }

  public goToPage(page: number, event: Event) {
    event.preventDefault();
    this.nrPage = page;
    console.log(this.nrPage);
  }

  private calculatePages() {
    this.totalPages = Math.ceil(this.planetsList.count / this.perPage);
    this.pages = [];
    const minPage = 0;
    const maxPage = this.totalPages;
    for (let i = minPage; i < maxPage; i++) {
      this.pages.push(i);
    }
  }
}
