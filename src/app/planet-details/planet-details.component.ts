import { Component, OnInit } from '@angular/core';
import { PlanetDetailsService } from './planet-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  public planetDetails;

  constructor(
    private planetDetailsService: PlanetDetailsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlanetDetails();
  }

  private getPlanetDetails() {
    const id = this.route.snapshot.params.id;
    this.planetDetailsService.getPlanetDetails(id)
    .subscribe(details => {
      this.planetDetails = details;
      console.log(this.planetDetails);
    });
  }
}
