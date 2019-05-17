import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  private house: any = {};
  private houseData: any = {};
  private currentSeat: string;
  private apiLoaded = false;
  private description: string;

  constructor(private activatedRoute: ActivatedRoute, private _houses: HousesService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.house = params;
    });

    this._houses.getHouseData(this.house.name).subscribe(response => {
      this.houseData = response[0];
      this.currentSeat = this.houseData.seat[0];
      this.apiLoaded = true;
      console.log(this.houseData);
    });

    this.description = this._houses.getHouseDescription(this.house.name);
    }

}
