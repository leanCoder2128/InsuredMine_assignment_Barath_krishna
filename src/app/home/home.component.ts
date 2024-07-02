import { Component, OnInit } from '@angular/core';
import { APCommonModule } from '../shared/components/app-common.module';
import { StarWarsNavBarComponent } from '../shared/components/app-nav-bar.component';
import { FilterOptions } from '../shared/model';
import { CommonModule } from '@angular/common';
import { data } from './modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-wars-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  standalone: true,
  imports: [APCommonModule, StarWarsNavBarComponent, CommonModule],
})
export class HomeComponent implements OnInit {
  filterOptions: FilterOptions[] = [];
  rowsPerPage = 25;
  currentPage = 1;
  arrayList = data;
  constructor(private router: Router) {}

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

  gotoProfile(item: any) {
    console.log(item, 'item');
    this.router.navigate([`/profile/${item.id}`]);
  }
}
