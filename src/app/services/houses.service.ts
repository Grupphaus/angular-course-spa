import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private _http: HttpClient) { }

  getHouseData(name) {
    this._http.get('https://api.got.show/api/show/houses/' + name);
  }

}
