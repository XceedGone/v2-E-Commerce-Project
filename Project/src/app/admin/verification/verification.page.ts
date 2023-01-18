import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  id : any;
  fname: string ="";
  lname: string ="";
  gender: string ="";
  contact: string ="";
  address: string ="";
  email: string ="";
  verify : string="";

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private _apiService : ApiService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      this.getUser(this.id);
    })
  }

  getUser(id){
    this._apiService.getUser(id).subscribe((res:any) => {
      console.log("Success", res);
      let user = res[0];
      this.fname = user.firstname;
      this.lname = user.lastname;
      this.gender = user.gender;
      this.contact = user.contactNum;
      this.address = user.adrs;
      this.email = user.email;
      this.verify = user.verified;
      
    },(err:any) => {
      console.log("Error", err);
    })
  }  

  update(){
    let data = {
      verify : this.verify,
    }

    this._apiService.verify(this.id,data).subscribe((res:any) => {
      console.log("Success", res);
      this.success('Update Sucessfully!');
      this.router.navigateByUrl('/admin-page');

    },(err:any) => {
      console.log("Error", err);
    })


  }

  async success(a) {
    const alert = await this.alertCtrl.create({
      header: 'Success',
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
