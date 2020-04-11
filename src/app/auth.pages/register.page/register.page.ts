import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private nav: NavController) { }

  ngOnInit() {
  }
  Login() {
    this.nav.navigateRoot(['/login']);
  }
  register_alert() {
    document.querySelector('app-register-alert').firstElementChild.classList.add('active');
    document.querySelector('app-register-alert').lastElementChild.classList.add('background_active');
  }
  goHome(){
    this.nav.navigateRoot(['/home']);
  }
}
