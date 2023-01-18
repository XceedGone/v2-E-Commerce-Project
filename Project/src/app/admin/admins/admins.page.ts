import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.page.html',
  styleUrls: ['./admins.page.scss'],
})
export class AdminsPage implements OnInit {
  admin : any = [];
  id : any;
 
 
  constructor(
    public _authService : AuthService,
    public _apiService : ApiService,
    public navCtrl : NavController,
    private alertCtrl: AlertController,
  ) {
    this.getAdmin();
    console.log(this.admin['id']);
    
   }

  ngOnInit() {
   
  }

  getAdmin(){
    this._apiService.getAdmin().subscribe((res)=>{
      console.log("SUCCESS ===",res);
      this.admin = res;
    }, (error: any) => {
      console.log("Error ===", error);
 
    })
  }

  async delAdmin(id) {
    const alert = await this.alertCtrl.create({
      header: 'Do you want to remove this user from the list?',  
      buttons: [
        {
          text: 'Yes',  
          handler: () => {
            this._apiService.delAdmin(id).subscribe(() =>{
              console.log("Success");
              this.getAdmin();
            },() =>{
              console.log("Error"); 
            })
          },
        },
        {
          text: 'No',
        },
      ],
    });
    alert.present();
  }
}
