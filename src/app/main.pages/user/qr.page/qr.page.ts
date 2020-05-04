import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  //qrData = 'https://forum.ionicframework.com/t/how-to-generate-a-qr-code-in-ionic/108736';
  qrData = '{id_user: 1, sid: c623dfa81a6e702578582af3dacbcabf}'
  scannedCode = null;

  constructor(
    private barcodeScaner: BarcodeScanner, 
    private base64ToGallary: Base64ToGallery,
    private toastCtrl: ToastController,
    private nav: NavController
  ) { }

  ngOnInit() {

  }
  
  goHome(){
    this.nav.navigateRoot(['/home']);
  }
  // this method is scaned qr code and return object with scanned data
  // scanCode() {
  //   this.barcodeScaner.scan().then(
  //     barcodeData => {
  //       this.scannedCode = barcodeData;
  //     }
  //   )
  // }


}
