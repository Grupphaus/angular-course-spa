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
    let result = [];
    for(let house of this.housesArr) {
      if (house.toLowerCase().split('-').join(' ').indexOf(term) >= 0) {
        result.push(house.toLowerCase());
      }
    }
    return result;
  }

  getHouseDescription(name: string) {
    let description: string = "";

    switch (name) {
      case "house-stark":
        description = HOUSE_DATA.stark
        break;
      case "house-targaryen":
        description = HOUSE_DATA.targaryen;
        break;
      case "house-lannister":
        description = HOUSE_DATA.lannister;
        break;
      case "house-baratheon":
        description = HOUSE_DATA.baratheon;
        break;
      case "house-greyjoy":
        description = HOUSE_DATA.greyjoy;
        break;
      case "house-tully":
        description = HOUSE_DATA.tully;
        break;
      case "house-frey":
        description = HOUSE_DATA.frey;
        break;
      case "house-arryn":
        description = HOUSE_DATA.arryn;
        break;
      case "house-bolton":
        description = HOUSE_DATA.bolton;
        break;
      case "house-tyrell":
        description = HOUSE_DATA.tyrell;
        break;
      case "house-martell":
        description = HOUSE_DATA.martell;
        break;
      case "house-clegane":
        description = HOUSE_DATA.clegane;
        break;
      default:
        description = "Not available"
        break;
    }
    return description;
  }

}
