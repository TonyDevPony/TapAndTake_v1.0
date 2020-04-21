import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthService } from 'src/app/services/auth.service/auth.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  data: any;
  code: any;
  err_message = [];

  constructor(
    private router: Router, 
    private nav: NavController, 
    private http: HTTP,
    private alertController: AlertController,
    private authService: AuthService,
    public toastController: ToastController,
    ) {  
  }

  ngOnInit() {
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

  sendCode() {

    const { code } = this;
    this.data = {
      code,
    };
    this.http.post('https://sc.grekagreka25.had.su/reg/confirm/', this.data, {}).then(data => {
      
      let parseData = JSON.parse(data.data);
      if(parseData.error == 907) {
        this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Не верно введен код подтвержения или код просрочен');
        this.openAlert(this.err_message);
      } else {
        this.authService.setUser(parseData);
        this.nav.navigateRoot(['/home']);
        setTimeout(() => {
          this.presentToast(parseData.name);
        }, 300);
      }
      
    });
    

  }

  async closeModal(){
    let alertDiv = document.querySelector('.alert');
    let backgroundDiv = document.querySelector('.background_opacity');

    backgroundDiv.setAttribute('style', "opacity: 0;");
    alertDiv.classList.remove('active');

    backgroundDiv.classList.remove('background_active');
    backgroundDiv.setAttribute('style', '');
  }
}