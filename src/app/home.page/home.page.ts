import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

const coffehouse_list = [
  { id_coffehouse: '1', logo: '', name_coffehouse: 'Sharikava', is_favorite: '1', count_cups_purchased: '2', count_of_cups: '10'},
  { id_coffehouse: '2', logo: '', name_coffehouse: 'Sho', is_favorite: '0', count_cups_purchased: '0', count_of_cups: '10'},
  { id_coffehouse: '3', logo: '', name_coffehouse: 'Kaviati', is_favorite: '0', count_cups_purchased: '0', count_of_cups: '8'},
  { id_coffehouse: '4', logo: '', name_coffehouse: 'Caffeggio', is_favorite: '1', count_cups_purchased: '10', count_of_cups: '10'},
  { id_coffehouse: '5', logo: '', name_coffehouse: 'Marmelad', is_favorite: '0', count_cups_purchased: '0', count_of_cups: '8'},
  { id_coffehouse: '6', logo: '', name_coffehouse: 'Coffee & Sandwich', is_favorite: '1', count_cups_purchased: '5', count_of_cups: '10'},
];
  


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {

  };

  @ViewChild('mySlider', {static: false}) slides: IonSlides;
  constructor(private nav: NavController) {}

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

  viewFavorites(){
    this.slides.slideTo(0, 600);
    this.changeButtonColor(0);
    return true;
  }
  viewCoffeeHouses(){
    this.slides.slideTo(1, 600);
    this.changeButtonColor(1);
    return true;
  }
  goQrPage(){
    this.nav.navigateRoot(['/qr']);
  }

}
