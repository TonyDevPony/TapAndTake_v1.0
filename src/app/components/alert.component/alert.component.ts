import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  public errors = [];
  constructor(private router: Router, private nav: NavController) {  
  }

  ngOnInit() {
    console.log(this.errors);
    
  }

  async closeModal(){
    let alertDiv = document.querySelector('.alert');
    let backgroundDiv = document.querySelector('.background_opacity');

    backgroundDiv.setAttribute('style', "opacity: 0;");
    alertDiv.classList.remove('active');

    backgroundDiv.classList.remove('background_active');
    backgroundDiv.setAttribute('style', '');

    this.errors = [];
  }
}
