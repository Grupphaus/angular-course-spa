import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  animations: [ trigger('ltr', [
    state('flyIn', style({ transform: 'translateX(0)' })),
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('1s 100ms ease')
    ])
  ]),
    trigger('rtl', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('1s 100ms ease')
      ])
    ])
  ]
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

  }

}
