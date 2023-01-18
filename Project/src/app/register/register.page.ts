import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AccessProvidersService } from '../providers/access-providers.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fname: string ="";
  lname: string ="";
  gender: string ="";
  // contact: string ="";
  // address: string ="";
  email: string ="";
  password: string ="";
  c_password: string ="";
  role: string ="Registered";
  users : any = [];


  disabledbutton; 
 
  constructor(
    private router : Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public _apiService : ApiService,
    private accsPrvds : AccessProvidersService
  ) {
    //this.getUsers();
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disabledbutton = false;
  }
 async reg(){
    if (this.fname == ""){
      this.presentToast('First name is Required');
    }else if(this.lname == ""){
      this.presentToast('Last name is Required');
    }else if(this.gender == ""){
      this.presentToast('Gender is Required');
    }
    // else if(this.contact == ""){
    //   this.presentToast('Contact is Required');
    // }else if(this.address == ""){
    //   this.presentToast('Address is Required');
    // }
    else if(this.email == ""){
      this.presentToast('Email is Required');
    }
    else if(this.password == ""){
      this.presentToast('Password is Required');
    }else if(this.c_password != this.password){
      this.presentToast('Password not same');
    }else{
      this.disabledbutton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Please wait',
      });
      loader.present();

      // return new Promise( resolve => {
      //       let data = {
      //         action     : 'proses_register',
      //         firstname  : this.fname,
      //         lastname   : this.lname,
      //         gender     : this.gender,
      //         contactNum : this.contact,
      //         adrs       : this.address,
      //         email      : this.email,
      //         pwd        : this.password,
      //       }
      //     this._apiService.addUser(data).subscribe((res:any) =>{
      //       if (res.success == true){
      //         console.log("SUCCESS ===",res);
      //         loader.dismiss();
      //         this.disabledbutton = false;
      //         this.presentToast(res.msg);
      //         this.router.navigate(['/login']);
      //      } else{
      //         loader.dismiss();
      //         this.disabledbutton = false;
      //         this.presentToast(res.msg);
      //      } 
      //       }, (error :any) => {
      //         loader.dismiss();
      //         this.disabledbutton = false;
      //         this.presentToast('Timeout! dumb');
      //     });
      //   }); 

//THIS IS WORKING 

        let data = {
          action : 'registration_progress',
          firstname : this.fname,
          lastname : this.lname,
          gender : this.gender,
          //contactNum : this.contact,
          //adrs : this.address,
          email : this.email,
          pwd : this.password,
          role : this.role,
        }
        
        this._apiService.addUser(data).subscribe((res:any) =>{
        console.log("SUCCESS ===",res);
        loader.dismiss();
        alert('SUCCESS');
        this.disabledbutton = false;
        //this.getUsers();
        this.router.navigate(['/login']);
      }, (error: any) => {
        console.log("Error ===", error);
        alert('ERROR');
        loader.dismiss();
        this.disabledbutton = false;
        this.router.navigate(['/register']);
      });

    }
  }
  // getUsers(){ 
  //   this._apiService.getUser().subscribe((res:any) =>{
  //     console.log("SUCCESS ===",res);
  //     this.users = res;
  //   }, (error: any) => {
  //     console.log("Error ===", error);
  // })
  // }
  
  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message : a,
      duration : 1500,
      position: 'top'
    });
    toast.present();
  }
  async presentAlert(a) {
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss : false,
      buttons: [
        {
          text: 'Close',
          handler : (blah) => {
            console.log('Confirm Cancel');
          } 
        },
        {
          text : 'Try Again',
          handler : () => {
            this.reg();
          }
        }
      ],
    });

    await alert.present();
  }

}
