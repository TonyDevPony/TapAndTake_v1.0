import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service/auth.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  //qrData = 'https://forum.ionicframework.com/t/how-to-generate-a-qr-code-in-ionic/108736';
  qrData: string;
  scannedCode = null;
  user: any;
  userId: number;
  

  constructor(
    private barcodeScaner: BarcodeScanner, 
    private base64ToGallary: Base64ToGallery,
    private toastCtrl: ToastController,
    private nav: NavController,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.userId = this.user.id_user;
    this.qrData = this.userId.toString();
  }
  
  goHome(){
    this.nav.navigateRoot(['/home']);
  }



}
