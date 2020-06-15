import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides, NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { HTTP } from '@ionic-native/http/ngx';
import { FileStorageForUserService } from 'src/app/services/fileStorageForUser.service/file-storage-for-user.service';
import { Network } from '@ionic-native/network/ngx';
import { NetworkConnectionService } from 'src/app/services/network.connection.service/network-connection.service';


/* Интерфейс который содержит поля которые прийдут с сервера, нужно для типизации обьекта */

export interface DataFromServer {
  success: boolean,
  error: boolean,
  data: string,
};



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  userConf: any;
  user: any;
  connecticon: boolean;

  @ViewChild('mySlider', {static: false}) slides: IonSlides;
  constructor(
    private nav: NavController,
    private route: ActivatedRoute,
    private authService: AuthService,
    private http: HTTP,
    private loadingController: LoadingController,
    private storageService: FileStorageForUserService,
    public toastController: ToastController,
    private network: Network,
    private networkService: NetworkConnectionService,
    public alertController: AlertController, 
    ) 
    {
    
  }

  async ngOnInit() {
    this.userConf = this.authService.getAthConf();
    this.user = this.authService.getUser();
    
    if(this.networkService.initializeConnection()) {
      this.connecticon = true;
      this.checkUserAndGoRequest();
    } else {
      this.connecticon = false;
      let message = '<i class="fas fa-exclamation-circle"></i>&#32;Подключение к интернету отсутсвует';
      this.openAlert(message);
    }
    document.addEventListener('offline', () => {
      this.connecticon = false;
      this.presentToast('Вы отключились от интернета');
      console.log('offline');
      
    });

    document.addEventListener('online', () => {
      this.connecticon = true;
      this.presentToast('Подключение востановлено');
      if(!this.authService.getUser()) {
        this.checkUserAndGoRequest();
      }
    });
  }

  checkUserAndGoRequest() {
    if(this.user == null && this.userConf.user_id != -1 && this.userConf.user_sid != '') {
      this.getUserFromServer({id_user: this.userConf.user_id, sid: this.userConf.user_sid});
      
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
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 1200,
      cssClass: 'toast',
    });
    toast.present();
  }

  async getUserFromServer (dataForServer: object) {

     await this.http.post('https://sc.grekagreka25.had.su/user/get/', dataForServer, {}).then(answer => {
        console.log('Answer from server...');
        console.log("Answer params: ");
        console.log(answer);
        let answerParse: DataFromServer;
        answerParse = JSON.parse(answer.data);
        if(answerParse.success) {
          var user = Object.assign(dataForServer, answerParse.data);
          this.authService.setUser(user);
        }
      }).catch(err => {console.log('Error: ' + err);}) 
  }


  setButton(){
    new Promise((resolve, reject) => {
      resolve(this.slides.getActiveIndex())
    }).then(
      result => this.changeButtonColor(result)
    );
    return true;
  }
  changeButtonColor(buttonNumb){
    if(buttonNumb === 0){
      document.getElementById('favorites').classList.value = 'choise_button active';
      document.getElementById('coffee_house').classList.value = 'choise_button';
    }
    if(buttonNumb === 1){
      document.getElementById('coffee_house').classList.value = 'choise_button active';
      document.getElementById('favorites').classList.value = 'choise_button';
    }
  }

  viewCoffeeHouses(){
    this.slides.slideTo(0, 600);
    this.changeButtonColor(0);
    return true;
  }
  viewFavorites(){
    this.slides.slideTo(1, 600);
    this.changeButtonColor(1);
    return true;
  }
  goQrPage(){
    this.nav.navigateRoot(['/qr']);
  }
  async goUserSettings() {
    if(!this.connecticon) {
      let message = '<i class="fas fa-exclamation-circle"></i>&#32;Возможно отсутсвует подключение к интернету, попробуйте еще раз...';
      this.openAlert(message);
      return false;
    }
    if(this.authService.getUser()) {
      this.nav.navigateRoot(['/user-settings']);
    } else {
      const load = await this.loadingController.create({
        cssClass: 'spinerColor',
        message: "Секунду...",
        spinner: "lines",
      });
      setTimeout(() => {
        load.dismiss();
        this.nav.navigateRoot(['/user-settings']);
      },250);
    }
    
  }
  goToAdminCoffeeHouses() {
    if(!this.connecticon) {
      let message = '<i class="fas fa-exclamation-circle"></i>&#32;Возможно отсутсвует подключение к интернету, попробуйте еще раз...';
      this.openAlert(message);
      return false;
    }
    this.nav.navigateRoot(['/admin-coffee-houses']);
  }

}
