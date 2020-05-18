import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController, AlertController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

const STORAGE_KEY = 'logo_image';


@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.page.html',
  styleUrls: ['./admin-settings.page.scss'],
})
export class AdminSettingsPage implements OnInit {

  image: any;
  social_network_icons = {
    instagram: { 
      html: '<i class="fab fa-instagram"></i><style>i {color: #A4B0BE; margin-top: 5px;}</style>',
      placeholder: '@instagram', 
    },
    facebook: {
      html: '<i class="fab fa-facebook"></i><style>i {color: #A4B0BE; margin-top: 5px;}</style>',
      placeholder: 'www.facebook.com',
    },
    browser: {
      html: '<i class="fas fa-globe-europe"></i><style>i {color: #A4B0BE; margin-top: 5px;}</style>',
      placeholder: 'www.your_site.com',
    },
  };
  social_network_count = [];

  constructor(private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath, private alertController: AlertController,
    private keyboard: Keyboard) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadStoredImages();
      
    });
  }

  async openAlert(message) {
    const alert = await this.alertController.create({
      header: 'Подсказка',
      message,
      cssClass: 'alert',
      buttons: [{
        text: 'OK',
        cssClass: 'alertButton'
      }]
    });
    await alert.present();
  }

  callNumberPurchHelper() {
    let message = '<i class="fas fa-info-circle"></i>&#32;Количество покупок, которое нужно совершить для получения акционной чашки'
    this.openAlert(message);
  }

  callLogoHelper() {
    let message = `<i class="fas fa-info-circle"></i>&#32;Выберете логотип с прозрачным фоном<br/>
                   <i class="fas fa-info-circle"></i>&#32;Минимальный размер 120х120 px<br/>`;
    this.openAlert(message);
  }


  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(image => {
      if (image) {
        let parseImage = JSON.parse(image);
        this.image = '';
        let filePath = this.file.dataDirectory + parseImage;
        let resPath = this.pathForImage(filePath);
        this.image = {name: parseImage, path: resPath, filePath: filePath};
        document.querySelector('.select_button').innerHTML = this.image.name;
      }
    });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: "Подтвердите действие",
        buttons: [{
                text: 'Загрузить из галереи',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Отмена',
                cssClass: 'action_sheet_cancel_btn',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
  }

  async selectSocialNetwork() {
    if(this.social_network_count.length == 3) {
      this.openAlert('<i class="fas fa-info-circle"></i>&#32;Соц. сетей должно быть не больше 3');
      return false;
    }
    const actionSheet = await this.actionSheetController.create({
        header: "Выберете соц. сеть из списка",
        buttons: [
            {
              text: 'Instagram',
              handler: () => {
                  if(this.social_network_count.find((i) => i === 'instagram')) {
                    this.openAlert('<i class="fas fa-info-circle"></i>&#32;Инстаграм уже указан');
                    return false;
                  }
                  this.createSocialNetwork('instagram');
                  this.social_network_count.push('instagram');
              }
            },
            {
              text: 'Facebook',
              handler: () => {
                if(this.social_network_count.find((i) => i === 'facebook')) {
                  this.openAlert('<i class="fas fa-info-circle"></i>&#32;Фейсбук уже указан');
                  return false;
                }
                this.createSocialNetwork('facebook');
                this.social_network_count.push('facebook');
              }
            },
            {
              text: 'Сайт',
              handler: () => {
                if(this.social_network_count.find((i) => i === 'browser')) {
                  this.openAlert('<i class="fas fa-info-circle"></i>&#32;Сайт уже указан');
                  return false;
                }
                this.createSocialNetwork('browser');
                this.social_network_count.push('browser');
              }
            },
            {
                text: 'Отмена',
                cssClass: 'action_sheet_cancel_btn',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
  }
  

  createSocialNetwork(name: string) {
    let social_network_row = document.createElement('ion-row');
    social_network_row.classList.value = 'animated fadeIn fast';
    social_network_row.id = name + '_row';
    social_network_row.style.cssText = `
                                          height: 50px;
                                          margin-top: 10px;
                                          position: relative;
                                        `;


    let social_network_icon_col = document.createElement('ion-col');
    social_network_icon_col.setAttribute('size', '1');
    social_network_icon_col.innerHTML = this.social_network_icons[name].html;
    social_network_icon_col.style.cssText = `
                                              display: flex;
                                              justify-content: center;
                                              align-items: center;
                                            `;
        

    let social_network_input_col = document.createElement('ion-col');
    social_network_input_col.style.cssText = `
                                              display: flex;
                                              `


    let social_network_delete_div = document.createElement('div');
    social_network_delete_div.innerHTML = `<i class="fas fa-times"></i>`;
    social_network_delete_div.addEventListener('click', () => {
      this.removeitemFromHtml(social_network_delete_div.parentElement);
    });

    social_network_delete_div.style.cssText = `
                                                position: absolute;
                                                right: 27px;
                                                top: 10px;
                                                width: 20px;
                                                height: 20px;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                              `;

    let social_network_input = document.createElement('input');
    social_network_input.setAttribute('type', 'text');
    social_network_input.setAttribute('placeholder', `${this.social_network_icons[name].placeholder}`);
    social_network_input.setAttribute('name', `${name}`);
    social_network_input.id = name;
    social_network_input.addEventListener('keyup', (e) => {
      this.submit(e);
      social_network_input.onblur = () => {
        
      };
    });
    social_network_input.style.cssText = `
                                          width: 94%;
                                          border: none;
                                          border-bottom: 1px solid #A4B0BE;
                                          height: 100%;
                                          color: #484848
                                         `
    social_network_input.style.outline = 'none';
    

    let social_network_label = document.createElement('label');
    social_network_label.setAttribute('for', `${name}`);

    social_network_input_col.appendChild(social_network_input);
    social_network_input_col.appendChild(social_network_label);

    social_network_row.appendChild(social_network_icon_col);
    social_network_row.appendChild(social_network_input_col);
    social_network_row.appendChild(social_network_delete_div);

    document.querySelector('#social_network_block').appendChild(social_network_row);
  }


  removeitemFromHtml(item) {
    item.remove();
    let id = item.id.split('_');
    let index = this.social_network_count.indexOf(id[0], 0);
    this.social_network_count.splice(index, 1);
    
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    }
    this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
              .then(filePath => {
                  let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                  let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
              });
      } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });
  }

  createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        this.updateStoredImages(newFileName);
    }, error => {
        this.presentToast('Error while storing file.');
    });
  }

  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
        let parseImage = JSON.parse(images);
        if (!parseImage) {
            let newImages = [name];
            this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
        } else {
            parseImage = name;
            this.storage.set(STORAGE_KEY, JSON.stringify(parseImage));
        }
 
        let filePath = this.file.dataDirectory + name;
        let resPath = this.pathForImage(filePath);
 
        let newEntry = {
            name: name,
            path: resPath,
            filePath: filePath
        };
 
        this.image = newEntry;
        (document.querySelector('.logo_img') as HTMLImageElement).src = this.image.path;
        document.querySelector('.select_button').innerHTML = this.image.name;
        this.ref.detectChanges(); // trigger change detection cycle
    });
  }

  submit(e) {
    if(e.key == "Enter") {
      this.keyboard.hide();
    }
  }

}
