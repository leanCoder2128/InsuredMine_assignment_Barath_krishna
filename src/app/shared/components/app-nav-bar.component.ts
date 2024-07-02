import { Component, OnInit } from "@angular/core";
import { APCommonModule } from "./app-common.module";


@Component({
    selector: 'app-star-wars-nav-bar',
    templateUrl : 'app-nav-bar.component.html',
    styleUrl: 'app-nav-bar.component.scss',
    standalone: true,
    imports: [APCommonModule]
})
export class StarWarsNavBarComponent implements OnInit{

    constructor(){}

    ngOnInit(): void {
        
    }
}