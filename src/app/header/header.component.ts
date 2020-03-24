import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // document.querySelector('.back_arrow').addEventListener('click', () => {
    //  // this.nav.navigateRoot(['/login']);
    //  console.log('login');
     
    // });
  }
  // ionViewWillEnter(){
  //   document.querySelector('#back_arrow').addEventListener('click', () => {
  //     //this.navCtrl.back();
  //     console.log('asd');
  //   });
  // }

}
