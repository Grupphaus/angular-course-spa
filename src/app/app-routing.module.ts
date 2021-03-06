import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HousesComponent } from './components/houses/houses.component';
import { HouseComponent } from './components/house/house.component';
import { SearchComponent } from './components/shared/search/search.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'houses/house/:name', component: HouseComponent },
  { path: 'search/:term', component: SearchComponent },
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
