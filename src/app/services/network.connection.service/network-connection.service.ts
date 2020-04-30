import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';


@Injectable({
  providedIn: 'root'
})
export class NetworkConnectionService {



  constructor(
    private network: Network,
  ) { }

  initializeConnection() {
    if(this.network.type == 'none') {
      console.log('network is disconnected');
      return false;
    }
    return true;
  }

  
}
