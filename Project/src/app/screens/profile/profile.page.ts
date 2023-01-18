import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../../auth.service';
import { UserModel } from '../../models/user.model';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user !: UserModel;
  id : any;
  cash : number;
  fname : any;
  lname: any;
  contact : any;
  adrs : any;
  email : any; 
  gender : any;
  verified : any; 
  curr_money : number;
  total : any;
  
  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public _apiService : ApiService,
    private _authService : AuthService,
    ) {
      this.getUserInfo();
      this.currentMoney();
      this.totalCashIn();
      
       
      
    }
     

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  currentMoney(){
    this.id = this._authService.user.id;
    this._apiService.getCash(this.id).subscribe((res : number)=>{
      let userCred = res[0];
      this.curr_money = userCred.money;
      console.log(this.curr_money);
      // console.log(this.curr_money);
      // this.curr_money = res;
      
    })
  }

  
  totalCashIn(){
    this.total = (this.cash) + +(this.curr_money);
    console.log(this.total);

  }



  async getUserInfo(){
    try {
      //  Block of code to try
      this.id = this._authService.user.id;
    this._apiService.getUser(this.id).subscribe((res:any) => {
      console.log("Success", res);
      let info = res[0];
        this.fname = info.firstname;
        this.lname = info.lastname;
        this.contact = info.contactNum;
        this.adrs = info.adrs;
        this.gender = info.gender;
        this.email = info.email;
        this.verified = info.verified;
        // this.curr_money = info.money;
        // console.log(this.curr_money);
    },(err:any) => {
      console.log("Error", err);
    })
    }
    catch(e) {
      //  Block of code to handle errors
      console.log('ID is not yet Defined');
    }
  }


  async cashIn(){
    if (this._authService.user.verified == "Verify"){ 
      if(this.cash == null){
        this.error('Please Enter Amount')
      }else{
        this.confirm();
      }  
      }else {
         
        this.error('Your account must be verified!');
      }
 }

 
 logout(){
  localStorage.clear();
  this.navCtrl.navigateRoot(['/login']).then(()=>{
    location.reload();
  });
}

async confirm() {
  const alert = await this.alertCtrl.create({
    header: 'Do you want to Continue?',
    message:'Amount: ' + this.cash,
    buttons: [
      {
        text: 'Yes',  
        handler: () => {
          this.id = this._authService.user.id;
          let data ={
            money : this.cash + +this.curr_money,
          }

          this._apiService.cashIn(this.id, data).subscribe((res:any) => {
          this.cash = null;
          console.log("Success", res);
        
          },(err:any) => {
            console.log("Error", err);
          });

          location.reload();      
        },
      },
      {
        text: 'No',
      },
    ],
  });

  alert.present();
}

async error(a) {
  const alert = await this.alertCtrl.create({
    header: 'Error',
    message: a,
    buttons: [
      {
        text: 'Ok',  
      },
 
    ],
  });

  alert.present();
}





}
