import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users : any = [];

  constructor(
    public _authService : AuthService,
    public _apiService : ApiService,
    private alertCtrl: AlertController,
  ) { 
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers(){
    this._apiService.getUsers().subscribe((res)=>{
      console.log("SUCCESS ===",res);
      this.users = res;
    }, (error: any) => {
      console.log("Error ===", error);
    })
  }

  // delUser(id){
  //   this._apiService.delUser(id).subscribe((res:any) =>{
  //     console.log("Success");
  //     this.getUsers();
  //   },(err:any) =>{
  //     console.log("Error"); 
  //   })
  // }

  async delUser(id) {
    const alert = await this.alertCtrl.create({
      header: 'Do you want to remove this user from the list?',  
      buttons: [
        {
          text: 'Yes',  
          handler: () => {
            this._apiService.delUser(id).subscribe(() =>{
              console.log("Success");
              this.getUsers();
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
