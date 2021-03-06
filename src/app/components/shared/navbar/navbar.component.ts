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
  }

  houseSearch(term: string) {
    if (term) {
      this.router.navigate(['/search', term]);
      this.toggle = false;
    }
  }

}
