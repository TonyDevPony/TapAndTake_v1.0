import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-coffee-houses',
  templateUrl: './admin-coffee-houses.page.html',
  styleUrls: ['./admin-coffee-houses.page.scss'],
})
export class AdminCoffeeHousesPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  goCreateCoffehouse() {
    this.nav.navigateRoot(['/admin-settings']);
  }
}
