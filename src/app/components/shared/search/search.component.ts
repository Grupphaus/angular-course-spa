import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../../../services/houses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  houses: any[] = [];
  term: string;

  constructor(private activatedRoute: ActivatedRoute, private _housesService: HousesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this.houses = this._housesService.search(params['term']);
    })
  }

}
