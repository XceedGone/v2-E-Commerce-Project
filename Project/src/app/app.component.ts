import { Component, ComponentFactoryResolver } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { ApiService } from './api.service';
import { Food } from 'src/app/models/food.model';
import { AuthService } from './auth.service';
import { UserModel } from './models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
 


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {

  // private cash$ = new BehaviorSubject<number>(0);
  // newCash$ = this.cash$.asObservable();
  id : any;
  dataStore : any;
  name : any;
  money : any;
  cash : any;
 // public token;
  public products  = [];
  user !: UserModel;
 
   


  get token(): any {
    return localStorage.getItem('token');
  }

  constructor(
    private platform: Platform,
    private router : Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public _apiService : ApiService,
    private _authService : AuthService,
    private storage : Storage,
    public navCtrl : NavController,
    private route: ActivatedRoute,
   
  ) {
    this.initializeApp();
    // console.log(this.token);
    this.getUserInfo();
     
    
  }
  ngOnInit() { 
    this._apiService.prodList().subscribe((data)=>{
      this.products = data
    });
   // this.user = this.getUsers(this.token);  
  }

  logout(){
    localStorage.clear();
    this.navCtrl.navigateRoot(['/login']).then(()=>{
      location.reload();
    });
  }
 
  initializeApp(){
    // this.platform.ready().then(() => {
    //   this.router.navigateByUrl('splash');
    // }); 
    // this.storage.get('storage_xxx').then((res) =>{
    //   if(res == null){
    //     this.navCtrl.navigateRoot('/login');
    //   }else{
    //     this.navCtrl.navigateRoot('/listing/home');
    //   }
    // }); 
  }

  // getUsers(token:string) : UserModel {  
  //   if(this._authService.IsLoggedIn()){
  //     return JSON.parse(atob(token.split('.')[1])) as UserModel;
  //   }
  // }

  async getUserInfo(){
    try {
      //  Block of code to try
      this.id = this._authService.user.id;
    this._apiService.getUser(this.id).subscribe((res:any) => {
      console.log("Success", res);
      let info = res[0];
        this.name = info.firstname;
        this.money = info.money;
      
      // this.year = student.year;
      // this.studentOne = student.studentOne;
      // this.studentTwo = student.studentTwo;
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
   this.id = this._authService.user.id;
    let data ={
      money : this.cash,
    }
  
    if (this._authService.user.verified == "Verify"){ 
    this._apiService.cashIn(this.id, data).subscribe((res:any) => {
      console.log("Success", res);
    },(err:any) => {
      console.log("Error", err);
    })
  }else {
//    alert('You Must be Verified First');
    this.error('You Must be Verified First');
  }
}

async error(a) {
  const alert = await this.alertCtrl.create({
    header: 'Error',
    message: a,
    buttons: [
      {
        text: 'Ok',
        handler : ()=>{
          this.navCtrl.navigateRoot(['/home']).then(()=>{
            location.reload();
          });
        } 
      },
    ],
  });

  alert.present();
}
 
}