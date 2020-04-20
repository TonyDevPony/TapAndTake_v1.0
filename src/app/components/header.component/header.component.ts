import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  private noBackButtonRoute = [
    'forgot-password',
    'qr', 
    'password-reset', 
    'user-settings',
    'admin-coffee-houses',
    'admin-settings',
  ];
  private buttonIsActive: boolean;

  constructor(
    private navCtrl: NavController, 
    private router: Router) { 
      this.buttonIsActive = false;
  }

  ngOnInit() {
    if(this.noBackButtonRoute.includes(this.router.url.slice(1))) {
        this.buttonIsActive = true;
    }
  }
  goBack(){
    
    this.navCtrl.back();
  }

}
