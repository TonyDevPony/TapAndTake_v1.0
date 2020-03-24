import { Component, OnInit, Input } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  arrow: any;
  constructor(private statusBar: StatusBar, 
    private keyboard: Keyboard, 
    public alertController: AlertController, ) { }

  ngOnInit() {
    this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
    this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });
  }
  ionViewWillEnter(){
    // this.arrow = document.querySelector('#back_arrow') as HTMLElement;
    // this.arrow.style.display = 'none';
  }

  forgotPass() {
    alert('__method___->__forgotPass()');
  }
  Register() {
    document.querySelector('app-register-alert').firstElementChild.classList.add('active');
    document.querySelector('app-register-alert').lastElementChild.classList.add('background_active');
  }
  Login() {
    alert('__method___->__Login()');
  }

  ionViewWillLeave(){
      console.log('willLeave');
      //this.arrow.style.display = 'block';
  }
}
