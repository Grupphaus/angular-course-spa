import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOUSE_DATA } from './houses.data';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private _http: HttpClient, private router: Router) { }

  public housesArr = ['house-stark', 'house-targaryen', 'house-lannister', 'house-baratheon',
                       'house-greyjoy', 'house-tully', 'house-frey', 'house-arryn',
                       'house-bolton', 'house-tyrell', 'house-martell', 'house-clegane'];

  upperCaseFirstLetter = text =>
    text.toLowerCase().split('-').map((s) =>
      s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  getHouseData(name: string) {
    return this._http.get('https://api.got.show/api/show/houses/' + this.upperCaseFirstLetter(name));
  }

  search(term: string) {
    term = term.toLowerCase();
    const result = [];
    for (const house of this.housesArr) {
      if (house.toLowerCase().split('-').join(' ').indexOf(term) >= 0) {
        result.push(house.toLowerCase());
      }
    }
    return result;
  }

  getHouseDescription(name: string) {
    return HOUSE_DATA[name.slice(6)];
  }

}
