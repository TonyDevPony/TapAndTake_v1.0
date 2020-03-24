import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  role: any;
  constructor(private activatedRoute: ActivatedRoute, private nav: NavController) { }

  ngOnInit() {
    this.role = this.activatedRoute.snapshot.paramMap.get('role');
    console.log(this.role);
  }
  // ionViewWillEnter(){
  //   document.querySelector('.back_arrow').addEventListener('click', () => {
  //     // this.nav.navigateRoot(['/login']);
  //     console.log('login');
      
  //    });
  // }

}
