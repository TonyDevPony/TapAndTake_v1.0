import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private statusBar: StatusBar, private keyboard: Keyboard) { }

  ngOnInit() {
    this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
    this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });
  }
  forgotPass() {
    alert('__method___->__forgotPass()');
  }
  Register() {
    alert('__method__->__Register()');
  }
  Login() {
    alert('__method___->__Login()');
  }
}
