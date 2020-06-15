import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { FileStorageForUserService } from 'src/app/services/fileStorageForUser.service/file-storage-for-user.service';
import { NavController, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

/* 
  Ключ по которому лежит информация
  в сторейдже о юзере
*/

const STORAGE_KEY_FOR_USER_INFO = 'user_info';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.page.html',
  styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage implements OnInit {
  name: any;
  email: any;
  phone: any;
  data: any;
  gender = '';
  date: any;
  userSettingsInfo: any;
  pickerOPTS: any;
  mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  constructor(
    private keyboard: Keyboard,
    private authService: AuthService,
    private storageService: FileStorageForUserService,
    private nav: NavController,
    private http: HTTP,
    private loading: LoadingController
  ) { 
  }

  ngOnInit() {
    this.userSettingsInfo = this.authService.getUser();
    this.name = this.userSettingsInfo.name;
    this.email = this.userSettingsInfo.email;
    this.phone = this.userSettingsInfo.phone;
    this.date = this.userSettingsInfo.birthDay;
    this.gender = this.userSettingsInfo.gender;
    console.log(this.userSettingsInfo);
    
    
    // Set hidden to bottom text when keyboard is show
    this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
    this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });

    // Change style of ion-select-option after this did load 
    document.querySelector('ion-select').addEventListener('click', function select() {
      setTimeout(() => {
        let action_sheet = document.querySelectorAll('.action-sheet-button-inner.sc-ion-action-sheet-md');
        (action_sheet[action_sheet.length - 1] as HTMLElement).style.color = '#FBA232';
        action_sheet
          .forEach(
            item => { 
              (item as HTMLElement).style.justifyContent = 'center'; 
          });
      }, 200);
    });
  }
  async Logout() {
    await this.storageService.removeUserFromStorage(STORAGE_KEY_FOR_USER_INFO).then(res => {
      console.log('User is logout');
      console.log(res);
      this.authService.setUser(null);
      this.nav.navigateRoot('login');
    });
  }

  async saveSettings() {
    const loadding = await this.loading.create({
      cssClass: 'spinerColor',
      message: "Сохранение...",
      spinner: "lines",
    });
    loadding.present();
    const {name, email, phone, date, gender } = this;
    this.data = {name, email, phone, date, gender };
    console.log(this.data);
    
    console.log("Request to server....");
    this.http.get('https://sc.grekagreka25.had.su/user/update/', {userId: this.userSettingsInfo.id_user, name: name, email:email, phone:phone, birthDay: date, gender:gender }, {}).then(answer => {
      loadding.dismiss();
      console.log("Request to accepted....");
      console.log("Data return....");
      let dataParsed = JSON.parse(answer.data);
      this.userSettingsInfo.name = dataParsed[0].name;
      this.userSettingsInfo.email = dataParsed[0].email;
      this.userSettingsInfo.phone = dataParsed[0].phone;
      this.userSettingsInfo.birthDay = dataParsed[0].birthDay;
      this.userSettingsInfo.gender = dataParsed[0].gender;
    });
  }
  submit(e) {
    if(e.key == "Enter") {
      this.keyboard.hide();
    }
  }
}
