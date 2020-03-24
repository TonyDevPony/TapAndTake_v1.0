import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-alert',
  templateUrl: './register-alert.component.html',
  styleUrls: ['./register-alert.component.scss'],
})
export class RegisterAlertComponent implements OnInit {

  constructor(private router: Router, private nav: NavController) { }

  ngOnInit() {
    let business = document.querySelectorAll('.business');
    business.forEach(item => (
          item.addEventListener('click', () => {
            this.goRegistration('bisnesess');
          })
        ));
    let client = document.querySelectorAll('.client');
    client.forEach(item => {
          item.addEventListener('click', () => {
            this.goRegistration('client');
          })
    });
    
  }

  goRegistration(role: string){
    this.closeModal();
    //this.router.navigate(['/register', { role }]);
    this.nav.navigateRoot(['/register', { role }]);
  }

  async closeModal(){
    let alertDiv = document.querySelector('.alert');
    let backgroundDiv = document.querySelector('.background_opacity');

    backgroundDiv.setAttribute('style', "opacity: 0;");
    alertDiv.classList.remove('active');

    setTimeout(() => {
      backgroundDiv.classList.remove('background_active');
      backgroundDiv.setAttribute('style', '');
    }, 800); 
  }
}
