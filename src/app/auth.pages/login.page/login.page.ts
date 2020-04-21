import { Component, OnInit, Input } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AlertController, NavController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthService } from 'src/app/services/auth.service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private arrow: any;
  private email = '';
  private password = '';
  private data: any;
  private headers: any;
  private err_message = [];

  constructor(
    private keyboard: Keyboard, 
    public alertController: AlertController, 
    private nav: NavController,
    private http: HTTP,
    private loadingController: LoadingController,
    public toastController: ToastController,
    private plt: Platform,
    private authService: AuthService,
    ) {

    }

  ngOnInit() {
    this.plt.ready().then(() => {
      // this.loadStoredUser();
    });
    this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
    this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });
  }

  forgotPass() {
    this.nav.navigateRoot(['/forgot-password']);

  }
  Register() {
    this.nav.navigateRoot(['/register']);
  }

  validate():boolean {
    let form_input_invalid = document.querySelectorAll('.form__field:invalid');
    let count_err = 0;
    let form_input = document.querySelectorAll('input');
    
        // НА ВРЕМЯ РАЗРАБОТКИ-------
        if((form_input[0] as HTMLInputElement).value == 'admin' ||  (form_input[1] as HTMLInputElement).value == 'admin') {
          return true;
        }
        //---------------------------
    
    
    
    if((form_input[0] as HTMLInputElement).value == '' ||  (form_input[1] as HTMLInputElement).value == '') {
      this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Заполните все поля');
      count_err++;
    }
    else if (form_input_invalid.length == 2) {
      this.err_message.push(`<i class="fas fa-exclamation-circle"></i>&#32;Проверте правильность введеных данных: 
                            <br> Неверно введен логин... 
                            <br> Пароль меньше 6 символов...`);
      count_err++;
    } 
    else if (form_input_invalid.length == 1 && form_input_invalid[0].id == 'emailInp') {
      this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Неверно введен email... ');
      count_err++;
    } 
    else if (form_input_invalid.length == 1 && form_input_invalid[0].id == 'pass') {
      this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Пароль меньше 6 символов...');
      count_err++;
    }
    if(count_err > 0) {
      this.openAlert(this.err_message);
      return false;
    } else {
      return true;
    } 
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

  async presentToast(name) {
    const toast = await this.toastController.create({
      message: `Приветсвую, ${name}`,
      duration: 1000,
      cssClass: 'toast',
    });
    toast.present();
  }

  async Login() {
    const { email, password } = this;
    this.data = {email, password};
    if(this.validate()) {
      console.log(this.data);
      const loading = await this.loadingController.create({
        cssClass: 'spinerColor',
        message: "Вход...",
        spinner: "lines",
      })
  
      await loading.present();
      this.http.post('https://sc.grekagreka25.had.su/auth/in', this.data, {}).then(data => {
        loading.dismiss();
        let dataJson = JSON.parse(data.data);
        console.log(dataJson);
        if(dataJson.hasOwnProperty('error')) {
          this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Такого пользователя не существует!!!');
          this.openAlert(this.err_message);
          return;
        }
        if(this.err_message.length == 0) {
          this.authService.setUser(dataJson);
          this.nav.navigateRoot(['/home']);
          setTimeout(() => {
            this.presentToast(dataJson.name);
          }, 300);
        }  
      });
    }
  }

  goHome(){
    this.nav.navigateRoot(['/home']);
  }
}
