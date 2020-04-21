import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController, AlertController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: any;
  data: any;
  err_message = [];
  
  constructor(
    private keyboard: Keyboard, 
    private nav: NavController, 
    public alertController: AlertController,
    private http: HTTP,
  ) { }

  ngOnInit() {
    this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
    this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });
  }

  async openAlert(message) {
    const alert = await this.alertController.create({
      header: 'Упс...',
      message,
      cssClass: 'alert',
      buttons: [{
        text: 'OK',
        cssClass: 'alertButton'
      }]
    });
    await alert.present();
    this.err_message = [];
  }

  goResetPass() {
    const { email } = this;
    this.data = { email };
    let count_err = 0;
    let input_invalid = document.querySelector('.form__field:invalid');

    if((document.querySelector('#emailInp') as HTMLInputElement).value == '') {
      this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Заполните все поля');
      count_err++;
    } else if (input_invalid && input_invalid.id == 'emailInp'){
      this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Неверно введен email');
      count_err++;
    }
    if(count_err != 0) {
      this.openAlert(this.err_message);
    }
    if(this.err_message.length == 0) {
      this.http.post('https://sc.grekagreka25.had.su/auth/send_pass/', this.data, {}).then(data => {
        let parseData = JSON.parse(data.data);
        if(parseData.error == 909) {
          this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Такой email не зарегестрирован');
          this.openAlert(this.err_message);
          return;
        } else {
          // this.nav.navigateRoot(['/password-reset']);
        }
      });
    }
  }
}
