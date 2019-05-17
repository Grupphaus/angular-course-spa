import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private _http: HttpClient) { }

  upperCaseFirstLetter = text =>
    text.toLowerCase().split('-').map((s) =>
      s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  getHouseData(name) {
    return this._http.get('https://api.got.show/api/show/houses/' + this.upperCaseFirstLetter(name));
  }

}
