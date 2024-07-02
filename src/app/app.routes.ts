import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo: 'home',
        pathMatch: 'full'
    },{
        path: 'home',
        component : HomeComponent
    },
    {
        path:'profile/:id',
        component:ProfileComponent
    }
];
