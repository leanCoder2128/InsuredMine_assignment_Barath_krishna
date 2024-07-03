import { Component, OnInit } from '@angular/core';
import { APCommonModule } from '../shared/components/app-common.module';
import { StarWarsNavBarComponent } from '../shared/components/app-nav-bar.component';
import { FilmDTO, SpeciesDTO } from '../shared/model';
import { CommonModule } from '@angular/common';
import { data } from './modal';
import { Router } from '@angular/router';
import { StarWarsService } from '../shared/services/startWars.service';
import { HttpClientModule } from '@angular/common/http';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-start-wars-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  standalone: true,
  imports: [
    APCommonModule,
    StarWarsNavBarComponent,
    CommonModule,
    HttpClientModule,
  ],
  providers: [StarWarsService],
})
export class HomeComponent implements OnInit {
  filmFilterOption: string[] = [];
  speciesFilterOption: string[] = [];
  vehicleFilterOption: string[] = [];
  starShipsFilterOption: string[] = [];
  rowsPerPage = 25;
  currentPage = 1;
  arrayList = data;
  constructor(private router: Router, private starWarSvc: StarWarsService) {}

  ngOnInit(): void {
    this.getFilterData();
  }

  getFilterData(){
    forkJoin({
      films: this.starWarSvc.getMoviesList().pipe(map(res => res.results.map(film => film.title))),
      species: this.starWarSvc.getSpecies().pipe(map(res => res.results.map(spec => spec.name))),
      vehicles: this.starWarSvc.getVehicle().pipe(map(res => res.results.map(vehicle => vehicle.name))),
      starships: this.starWarSvc.getStarShips().pipe(map(res => res.results.map(starship => starship.name))),
    }).subscribe(({ films, species, vehicles, starships }) => {
      this.filmFilterOption = films;
      this.speciesFilterOption = species;
      this.vehicleFilterOption = vehicles;
      this.starShipsFilterOption = starships;
      console.log(this.filmFilterOption, 'films');
      console.log(this.speciesFilterOption, 'species');
      console.log(this.vehicleFilterOption, 'vehicles');
      console.log(this.starShipsFilterOption, 'starships');
    });
  }



  gotoProfile(item: any) {
    console.log(item, 'item');
    this.router.navigate([`/profile/${item.id}`]);
  }
}
