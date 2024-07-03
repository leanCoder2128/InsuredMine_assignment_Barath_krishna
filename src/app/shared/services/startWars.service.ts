import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiResult, FilmDTO, PeopleDto, SpeciesDTO, StarshipDTO, VehicleDTO } from "../model";
import { Observable, forkJoin } from "rxjs";


@Injectable()
export class StarWarsService {


    private apiUrl : string;

    constructor(private http : HttpClient){
        this.apiUrl = 'https://swapi.dev/api/'
    }


    getMoviesList(){
        return this.http.get<ApiResult<FilmDTO[]>>(this.apiUrl + 'films/');
    }

    getSpecies(){
        return this.http.get<ApiResult<SpeciesDTO[]>>(this.apiUrl + '/species');
    } 

    getVehicle(){
        return this.http.get<ApiResult<VehicleDTO[]>>(this.apiUrl + '/vehicles/');
    }

    getStarShips(){
        return this.http.get<ApiResult<StarshipDTO[]>>(this.apiUrl + '/starships');
    }

    getPeopleDetail(){
        return this.http.get<PeopleDto>('https://swapi.dev/api/people/1');
    }

    getFlimNames(filmUrls : string[]): Observable<FilmDTO[]>{
        return forkJoin(filmUrls.map(url => this.http.get<FilmDTO>(url)));
    }

    getFilmVehicle(vehicleUrl : string[]): Observable<VehicleDTO[]>{
        return forkJoin(vehicleUrl.map(url => this.http.get<VehicleDTO>(url)));
    }

    getStartShips(startShipUrl : string[]): Observable<StarshipDTO[]>{
        return forkJoin(startShipUrl.map(url => this.http.get<StarshipDTO>(url)));
    }
}
