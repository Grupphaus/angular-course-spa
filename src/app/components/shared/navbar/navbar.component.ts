import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public toggle: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event) {
      }
    });
  }
  
  houseSearch(term: string) {
    if (term) {
      this.router.navigate(['/search', term]);
    }
  }

}
