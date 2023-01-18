import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.page.html',
  styleUrls: ['./staffs.page.scss'],
})
export class StaffsPage implements OnInit {
  staffs : any = [];
  constructor(
    public _authService : AuthService,
    public _apiService : ApiService,
    private alertCtrl: AlertController,
  ) {
    this.getStaffs();
   }

  ngOnInit() {
  }

  getStaffs(){
    this._apiService.getStaffs().subscribe((res)=>{
      console.log("SUCCESS ===",res);
      this.staffs = res;
    }, (error: any) => {
      console.log("Error ===", error);
    })
  }

 

  async delStaffs(id) {
    const alert = await this.alertCtrl.create({
      header: 'Do you want to remove this user from the list?',  
      buttons: [
        {
          text: 'Yes',  
          handler: () => {
            this._apiService.delStaffs(id).subscribe(() =>{
              console.log("Success");
              this.getStaffs();
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
