import { Component, OnInit, Input } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  arrow: any;
  constructor(private statusBar: StatusBar, 
    private keyboard: Keyboard, 
    public alertController: AlertController, 
    private nav: NavController,) { }

  ngOnInit() {
    this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
    this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });
  }

  forgotPass() {
    this.nav.navigateRoot(['/forgot-password']);

  }
  Register() {
    this.nav.navigateRoot(['/register']);
  }

  Login() {
    alert('__method___->__Login()');
  }
  goHome(){
    this.nav.navigateRoot(['/home']);
  }
  ionViewWillEnter() {
    // this.backButton.style.display = 'flex';
    // if(this.noBackButtonRoute.includes(this.router.url.slice(1))) {
    //   console.log('ngOnInit');
      
    //   this.backButton.style.display = 'none';
    // }
    // console.log('ionViewDidEnter');
    console.log('ionViewWillEnter');
    
    
  }

}
