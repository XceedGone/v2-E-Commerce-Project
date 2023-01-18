import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
// import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  id : any;
  fname: string ="";
  lname: string ="";
  gender: string ="";
  contact: string ="";
  address: string ="";
  email: string ="";
  verify: string ="";
  password: string ="";
  c_password: string ="";
 // transferObject : FileTransferObject;
  base64: string ="";
  fileName : string="";
  format : string="";
  //base64Image : string;
  image : string="";

  constructor(
    public _apiService : ApiService,
    public _authService : AuthService,
    private toastCtrl: ToastController,
    private router : Router,
    private route: ActivatedRoute,
  //  private camera : Camera,
  //  private fileTransfer:FileTransfer
    ) { 
      this.route.params.subscribe((param:any) =>{
        this.id = param.id;
        console.log(this.id);
        this.getUser(this.id);
      })
    }

  ngOnInit() {
   // this.transferObject = this.fileTransfer.create();
  }

  // selectedFile(event) : void{
  //   this.image = event.target.files[0];
  // }

  getUser(id){
    this._apiService.getUser(id).subscribe((res:any) => {
      console.log("Success", res);
        let users = res[0];
        this.fname = users.firstname;
        this.lname = users.lastname;
        this.gender = users.gender;
        this.contact = users.contactNum;
        this.address = users.adrs;
        this.email = users.email;
        this.verify = users.verified;

    },(err:any) => {
      console.log("Error", err);
    })
  }

  update(){
    if (this.verify == "Pending"){
        if(this.contact == ""){
          this.presentToast('Contact is Required');
        }else if(this.address == ""){
          this.presentToast('Address is Required');
        }else if(this.fname == ""){
          this.presentToast('First name is Required');
        }else if(this.lname == ""){
          this.presentToast('Last name is Required');
        }else if(this.gender == ""){
          this.presentToast('Gender is Required');
        }else if(this.contact == ""){
          this.presentToast('Contact is Required');
        }else if(this.address == ""){
          this.presentToast('Address is Required');
        }else if(this.email == ""){
          this.presentToast('Email is Required');
        }else if(this.password == ""){
          this.presentToast('Password is Required');
        }else if(this.c_password != this.password){
          this.presentToast('Password not same');
        }else{
          let data = {
            // action : 'registration_progress',
             firstname : this.fname,
             lastname : this.lname,
             gender : this.gender,
             contactNum : this.contact,
             adrs : this.address,
             verify : this.verify,
             email : this.email,
             pwd : this.password,
              
           }
           this._apiService.updateUser(this.id, data).subscribe((res:any) => {
             console.log("Success", res);
             this.router.navigateByUrl('/home').then(()=>{
              location.reload();
             })
       
           },(err:any) => {
             console.log("Error", err);
           })
      }
    }else{
      if(this.password == ""){
        this.presentToast('Password is Required');
      }else if(this.c_password != this.password){
        this.presentToast('Password not same');
      }else{ 
        let data = {
        // action : 'registration_progress',
          firstname : this.fname,
          lastname : this.lname,
          gender : this.gender,
          contactNum : this.contact,
          adrs : this.address,
          verify : this.verify,
          email : this.email,
          pwd : this.password,  
        }

    this._apiService.updateUser(this.id, data).subscribe((res:any) => {
      console.log("Success", res);
      this.router.navigateByUrl('/home').then(()=>{
        location.reload();
       })
    },(err:any) => {
      console.log("Error", err);
    })
  }
}
}

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message : a,
      duration : 1500,
      position: 'top'
    });
    toast.present();
  }
}
