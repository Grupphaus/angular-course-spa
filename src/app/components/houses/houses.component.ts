import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  public houses1: string[];
  public houses2: string[];
  public houses3: string[];

  constructor(private _houses: HousesService) { }

  ngOnInit() {
    this.houses1 = ['house-stark', 'house-targaryen', 'house-lannister', 'house-baratheon'];
    this.houses2 = ['house-greyjoy', 'house-tully', 'house-frey', 'house-arryn'];
    this.houses3 = ['house-bolton', 'house-tyrell', 'house-martell', 'house-clegane'];

    // this.list = [].concat(...this.houses1, this.houses2, this.houses3);

    // this._houses.getHouseData('house-stark').subscribe(
    //   rta => console.log(rta)
    // );
  }

}
