import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Storage  } from '@ionic/storage';
import { AuthService } from '../auth.service';
import { UserModel } from '../models/user.model';
//import { AccessProviders } from '../providers/access-providers';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id : any;
  fname: string ="";
  lname: string ="";
  gender: string ="";
  contact: string ="";
  address: string ="";
  email: string ="";
  password: string ="";
  c_password: string ="";
  userCreds !: UserModel;
  responseData : any;

  disabledbutton; 

  constructor(
    private router : Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public _apiService : ApiService,
    private storage : Storage,
    public navCtrl : NavController,
    private route: ActivatedRoute,
    public _authService : AuthService,
   // private accsPrvds : AccessProviders
  ) {
    //   this.route.params.subscribe((param:any) =>{
    //   this.id = param.id;
    //   console.log(this.id);
    //   this.getUser(this.id);
    // })
    localStorage.clear();
   }
 
  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disabledbutton = false;
  }

  async login(){
    if (this.email == ""){
      this.presentToast('Email is Required');
    }else if(this.password == ""){
      this.presentToast('Password is Required');
    }else{
      this.disabledbutton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Please wait',
      });
     loader.present();

     return new Promise(resolve =>{
        let data = {
          action : 'login_progress',
          email : this.email,
          pwd : this.password
        }
     // this._apiService.logUser(data).subscribe((res:any) =>{
      this._authService.login(data).subscribe((res:any) =>{

        if(this._authService.user.role == "Registered"){
          this.navCtrl.navigateRoot(['/home']).then(()=>{
            location.reload();
          })
          loader.dismiss();
        }else if(this._authService.user.role == "Admin"){
          this.navCtrl.navigateRoot(['/admin-page']).then(()=>{
            location.reload();
          })
          loader.dismiss();
        }else if(this._authService.user.role == "Staff"){
          this.navCtrl.navigateRoot(['/staff-page']).then(()=>{
            location.reload();
          })
          loader.dismiss();
        }else{
          alert('Invalid User');
          loader.dismiss();
        }},()=>{
               loader.dismiss();
               this.disabledbutton = false;
               this.presentToast('Email or Password is Incorrect');
   
      //    if(res.message == true){
      //      loader.dismiss();
      //      this.disabledbutton = false;
      //       this.presentToast('Login Success');
      //      // this.responseData = res.token;
      //       localStorage.setItem('token', res.token);
      //       localStorage.setItem('role', 'registered');
      //       // this.userCreds = this.getUsers(res.token);   
      //       this.navCtrl.navigateRoot(['/home']);       
      //    }else if(res.result == false){
      //     this.disabledbutton = false;
      //     this.presentToast('');
      //     loader.dismiss();
      //    }},(err)=>{
      //      loader.dismiss();
      //      this.disabledbutton = false;
      //      this.presentToast('Email or Password is Incorrect');
          });     
      });
  }
  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message : a,
      duration : 1500
    });
    toast.present();
  }
}
