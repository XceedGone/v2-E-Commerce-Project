import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  id : any;
  fname: string ="";
  lname: string ="";
  gender: string ="";
  contact: string ="";
  address: string ="";
  email: string ="";
  role : string="";
 

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private _apiService : ApiService,
    private alertCtrl: AlertController,
  ) {
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      this.getUser(this.id);
    })
   }

  ngOnInit() {
  }

  getUser(id){
    this._apiService.getUser(id).subscribe((res:any) => {
      console.log("Success", res);
      let staff = res[0];
      this.fname = staff.firstname;
      this.lname = staff.lastname;
      this.gender = staff.gender;
      this.contact = staff.contactNum;
      this.address = staff.adrs;
      this.email = staff.email;
      this.role = staff.role;

    },(err:any) => {
      console.log("Error", err);
    })
  }  

  update(){
    let data = {
      firstname : this.fname,
      lastname : this.lname,
      gender : this.gender,
      contactNum : this.contact,
      adrs : this.address,
      email : this.email,
      role : this.role,
    }

    this._apiService.update(this.id,data).subscribe((res:any) => {
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
