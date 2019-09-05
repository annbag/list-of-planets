import { Component, OnInit } from '@angular/core';
import { PlanetDetailsService } from './planet-details.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  public planetDetails;

  constructor(private planetDetailsService: PlanetDetailsService) { }

  ngOnInit() {
    this.getPlanetDetails();
  }

  private getPlanetDetails() {
    this.planetDetailsService.getPlanetDetails()
    .subscribe(details => {
      this.planetDetails = details;
      console.log(this.planetDetails);
    });
  }
}
