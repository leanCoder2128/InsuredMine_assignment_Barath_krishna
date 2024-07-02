import { Component, OnInit } from '@angular/core';
import { APCommonModule } from '../shared/components/app-common.module';
import { StarWarsNavBarComponent } from '../shared/components/app-nav-bar.component';
import { FilterOptions } from '../shared/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-wars-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  standalone: true,
  imports: [APCommonModule, StarWarsNavBarComponent,CommonModule],
})
export class HomeComponent implements OnInit {
  filterOptions: FilterOptions[] = [];
  constructor() {}

  ngOnInit(): void {
    this.filterOptions = [
      {
        filterTitle: 'movie name',
        filterTitleId: 1,
      },
      {
        filterTitle: 'Species',
        filterTitleId: 2,
      },
      {
        filterTitle: 'Vehicle',
        filterTitleId: 3,
      },
      {
        filterTitle: 'start ships',
        filterTitleId: 4,
      },
      {
        filterTitle: 'Birth year',
        filterTitleId: 5,
      },
    ];
  }
}
