import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { FileStorageForUserService } from 'src/app/services/fileStorageForUser.service/file-storage-for-user.service';
import { NavController } from '@ionic/angular';

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

  userSettingsInfo: any;
  pickerOPTS: any;
  mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  constructor(
    private keyboard: Keyboard,
    private authService: AuthService,
    private storageService: FileStorageForUserService,
    private nav: NavController,
  ) { }

  ngOnInit() {
    this.userSettingsInfo = this.authService.getUser();
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
  submit(e) {
    if(e.key == "Enter") {
      this.keyboard.hide();
    }
  }
}
