import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiResult, FilmDTO, SpeciesDTO, StarshipDTO, VehicleDTO } from "../model";


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
}
