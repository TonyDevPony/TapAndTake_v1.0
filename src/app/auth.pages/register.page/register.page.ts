import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { error } from 'protractor';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { NetworkConnectionService } from 'src/app/services/network.connection.service/network-connection.service';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  regExp = '^\([0-9]{3}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}\s$';

  private name: string; 
  private email: string; 
  private phone: string; 
  private password: string; 
  private confirmpass: string;
  private data: any;
  private err_message = [];
  private conection;

  
  constructor(
     private activatedRoute: ActivatedRoute,
     private keyboard: Keyboard,
     private nav: NavController,
     private http: HTTP,
     public alertController: AlertController,
     private loadingController: LoadingController,
     public toastController: ToastController,
     private authService: AuthService,
     private plt: Platform,
     private networkService: NetworkConnectionService,
     private network: Network,
     ) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      if(!this.networkService.initializeConnection()) {
        let massage = '<i class="fas fa-exclamation-circle"></i>&#32;Подключение к интернету отсутсвует';
        this.openAlert(massage);
        this.conection = false;
      } else {
        this.conection = true;
      }
      this.network.onConnect().subscribe(() => {
        this.conection = true;
      });
      this.network.onDisconnect().subscribe(() => {
        this.conection = false;
      });

    });

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

  checkConection() {
    let massage = '<i class="fas fa-exclamation-circle"></i>&#32;Проверте подключение к интернету';
    if(this.conection) {
      return true;
    }
    this.openAlert(massage);
    return false;
  }

  validate(data: any): boolean {
    let form_input = document.querySelectorAll('input');
    let form_input_invalid = document.querySelectorAll('.form__field:invalid');
    let count_err = 0;
    
    form_input.forEach(item => {
      item as HTMLInputElement;
      if (item.value == '' && count_err == 0 && item.id != 'code') { 
        console.log(item);
        
        this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Не все поля заполнены');
        count_err++;
      }
    });
    if (form_input_invalid.length == 5) {
      this.err_message.push(`<i class="fas fa-exclamation-circle"></i>&#32;Проверте правильность введеных данных: 
                              <br> Неверно введен логин...
                              <br> Неверный формат телефона... 
                              <br> Пароль меньше 6 символов...`);
      count_err++;
    }
  
    form_input_invalid.forEach(item => {
      if(item.id == 'full_name') {
        this.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Пожалуйста, введите настоящее имя');
        count_err++;
      }
      if(item.id == 'emailInp') {
        this.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Неверно введен email');
        count_err++;
      }
      if(item.id == 'phone_number') {
        this.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Неверно введен номер телефона');
        count_err++;
      }
      if (item.id == 'pass'){
        this.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Пароль меньше 6 символов');
        count_err++;
      }
    });

    if (data.password != data.confirmpass) {
      this.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Пароли не совпадают');
      count_err++;
    }
    if(count_err > 0) {
      this.openAlert(this.err_message);
      return false;
    } else {
      return true;
    }
  }

  async Register() {
    const {name, email, phone, password, confirmpass} = this;
    this.data = {name, email, phone, password, confirmpass};

    if(this.checkConection() && this.validate(this.data)) {
      console.log(this.data);
      const loading = await this.loadingController.create({
        cssClass: 'spinerColor',
        message: "Вход...",
        spinner: "lines",
      })
      await loading.present();

      this.http.post('https://sc.grekagreka25.had.su/reg/in', this.data, {}).then(data => {
        loading.dismiss();
        console.log(data.data);
        let dataJson = JSON.parse(data.data);

        console.log(dataJson);
        if(dataJson.error == 902) {
          this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Такой пользователь уже существует!!!');
          this.openAlert(this.err_message);
          return;
        }
        if(this.err_message.length == 0) {
          this.alert();
        }  
      }).catch(error => {
        console.log(error.error);
      });
    }
  }

  alert() {
    document.querySelector('app-alert').firstElementChild.classList.add('active');
    document.querySelector('app-alert').lastElementChild.classList.add('background_active');
  }

  Login() {
    this.nav.navigateRoot(['/login']);
  }
}
