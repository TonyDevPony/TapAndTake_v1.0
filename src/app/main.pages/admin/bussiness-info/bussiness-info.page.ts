import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-bussiness-info',
  templateUrl: './bussiness-info.page.html',
  styleUrls: ['./bussiness-info.page.scss'],
})
export class BussinessInfoPage implements OnInit {

  scannedCode: any;
  id_user: any;
  coffehouseId: any;

  constructor(private nav: NavController, private barcodeScaner: BarcodeScanner, private router: Router, 
    private route: ActivatedRoute, private http: HTTP, private loading: LoadingController) {
    
  }

  async ngOnInit() {
    await this.route.queryParamMap.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.coffehouseId = this.router.getCurrentNavigation().extras.state.coffehouseId;
      }
    });
    console.log(this.coffehouseId);
  }

  goAdminSettings() {
    alert("__method: goAdminSettings()");
  }

  async goScanQrPage() {
    await this.barcodeScaner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData;
      }
    );
    this.id_user = this.getIdUserFromCode();
    console.log(this.id_user);
    const loading = await this.loading.create({
      cssClass: 'spinerColor',
      message: "Вход...",
      spinner: "lines",
    });
    loading.present();
    this.requestToSetClients();
    setTimeout(() => {
      loading.dismiss();
    }, 600);
    
  }

  // setClients
  // https://sc.grekagreka25.had.su/coffeehouse/setClients/
  // int $userId, int $coffeehouseId
  async requestToSetClients()
  {
    await this.http.get('https://sc.grekagreka25.had.su/coffeehouse/qrCode/', {userId: this.id_user, coffeehouseId: this.coffehouseId}, {})
          .then(answer => {
            console.log("Request to accepted....");
            console.log("Data return....");
            let parsedData = JSON.parse(answer.data);
            if(parsedData.status == 'error') 
            {
              console.log('error');
              return false;
            } 
            console.log('success');
            
          });

  }

  

  getIdUserFromCode(){
    return this.scannedCode.text;
  }

  goToHomePage() {
    this.nav.navigateRoot('/home');
  }
}
