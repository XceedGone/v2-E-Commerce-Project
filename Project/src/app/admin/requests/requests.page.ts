import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {
  request : any = [];

  constructor(
    public _authService : AuthService,
    public _apiService : ApiService,
    public navCtrl : NavController,
  ) { 
    this.getReq();
  }

  ngOnInit() {
  }

  getReq(){
    this._apiService.getRequest().subscribe((res)=>{
      console.log("SUCCESS ===",res);
      this.request = res;
    }, (error: any) => {
      console.log("Error ===", error);
 
    })
  }


}
