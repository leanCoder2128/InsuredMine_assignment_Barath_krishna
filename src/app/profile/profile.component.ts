import { Component, OnInit } from '@angular/core';
import { duplicateArray } from '../home/modal';
import { NgFor } from '@angular/common';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
  imports:[NgFor],
  standalone:true
})
export class ProfileComponent implements OnInit {
  displayList = duplicateArray;
  film: any = [];
  vehicles: any = [];
  ships: any = [];
  constructor() {}

  ngOnInit(): void {
    let keys = Object.keys(this.displayList);
    // console.log(keys, 'displayList');
    keys.forEach((res) => {
      if (res == this.displayList.film.name.toLowerCase()) {
        this.film = this.displayList.film.filmList;
        this.film.forEach((res:any)=>{
            res['type'] = 'Film'
        });
      }
      if (res == this.displayList.ships.name.toLowerCase()) {
        this.ships = this.displayList.ships.shipsList;
        this.ships.forEach((res:any)=>{
            res['type'] = 'Ships'
        });
      }
      if (res == this.displayList.vehicles.name.toLowerCase()) {
        this.vehicles = this.displayList.vehicles.vehiclesList;
        this.vehicles.forEach((res:any)=>{
            res['type'] = 'Vehicles'
        });
      }
    });
    console.log(this.film,this.vehicles,this.ships,'ddd');
  }
}
