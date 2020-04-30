import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AuthService } from './services/auth.service/auth.service';

import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { FileStorageForUserService } from './services/fileStorageForUser.service/file-storage-for-user.service';


const STORAGE_KEY = 'user_info';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private keyboard: Keyboard,
    private authService: AuthService,
    private FileStorageUser: FileStorageForUserService,
    private network: Network,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show(); // КЛАВИАТУРА ПОВЕРХ ФИКС
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#fff');
    });
  }
}
