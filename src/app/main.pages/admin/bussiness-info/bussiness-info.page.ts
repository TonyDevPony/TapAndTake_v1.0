import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bussiness-info',
  templateUrl: './bussiness-info.page.html',
  styleUrls: ['./bussiness-info.page.scss'],
})
export class BussinessInfoPage implements OnInit {

  constructor(private nav: NavController,) { }

  ngOnInit() {
  }
  goAdminSettings() {
    alert("__method: goAdminSettings()");
  }
  goScanQrPage() {
    alert("__method: goScanQrPage()");
  }
  goToHomePage() {
    this.nav.navigateRoot('/home');
  }
}
