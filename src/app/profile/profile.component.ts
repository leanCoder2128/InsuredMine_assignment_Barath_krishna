import { Component, OnInit } from '@angular/core';
import { duplicateArray } from '../home/modal';
import { CommonModule, NgFor } from '@angular/common';
import { StarWarsService } from '../shared/services/startWars.service';
import { FilmDTO, PeopleDto, VehicleDTO } from '../shared/model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
  imports:[NgFor , HttpClientModule,CommonModule],
  providers: [StarWarsService],
  standalone:true
})
export class ProfileComponent implements OnInit {
  displayList = duplicateArray;
  PeopleInformation : PeopleDto;
  filmDetail : FilmDTO[] = [];
  vehicleDetail : string[] = [];
  starShipDetail : string[] = [];
  film: any = [];
  vehicles: any = [];
  ships: any = [];
  constructor(private starWarSvc: StarWarsService) {}

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
    this.getPeopleDetail();
  }

  getPeopleDetail(){
    this.starWarSvc.getPeopleDetail().subscribe((res) => {
      console.log(res,'rererere');
      this.PeopleInformation = res;
      this.getFlimNames(res.films);
      this.getFlimVehicle(res.vehicles);
      this.getStartShips(res.starships);
    })
  }

  getFlimNames(filmUrls : string[]){
    this.starWarSvc.getFlimNames(filmUrls).subscribe((res) => {
      this.filmDetail = res;
    });
  }

  getFlimVehicle(vehicleUrl : string[]){
    this.starWarSvc.getFilmVehicle(vehicleUrl).subscribe((res) => {
      this.vehicleDetail = res.map((vehicle) => vehicle.name);
    });
  }

  getStartShips(starShipUrls : string[]){
    this.starWarSvc.getStartShips(starShipUrls).subscribe((res) => {
      this.starShipDetail = res.map((ship) => ship.name);
    });
  }
}
