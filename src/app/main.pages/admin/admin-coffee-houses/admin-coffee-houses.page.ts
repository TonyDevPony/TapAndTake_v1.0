import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-admin-coffee-houses',
  templateUrl: './admin-coffee-houses.page.html',
  styleUrls: ['./admin-coffee-houses.page.scss'],
})
export class AdminCoffeeHousesPage implements OnInit {

  user: any;
  creatorId: number;
  coffeehouses: any;

  constructor(private nav: NavController, private http: HTTP, private Auth: AuthService, private router: Router) { }

  ngOnInit() {

    this.user = this.Auth.getUser();
    this.creatorId = this.user.id_user;

    this.getUserCoffehouse();
  }

  async getUserCoffehouse()
  {
    console.log("Request to server....");
    await this.http.get('https://sc.grekagreka25.had.su/coffeehouse/userCoffeeHouses/', {creatorId: this.creatorId}, {}).then((answer) => {
      console.log("Request to accepted....");
      console.log("Data return....");
      let parsedData = JSON.parse(answer.data);
      if(parsedData.status == 'error') 
      {
        console.log(`data for user ${this.creatorId} not found!!!`);
        return false;
      } 
      this.coffeehouses = parsedData;
      console.log(this.coffeehouses);
      
      
    });
  }


  goCreateCoffehouse() {
    this.nav.navigateRoot(['/admin-settings']);
    
  }
  goCoffehouse(id?){
    let navigationExtras: NavigationExtras = {
      state: {
        coffehouseId: id
      }
    };
    this.router.navigate(['bussiness-info'], navigationExtras);

  }
}
