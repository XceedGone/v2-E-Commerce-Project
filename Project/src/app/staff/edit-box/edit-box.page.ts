import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-box',
  templateUrl: './edit-box.page.html',
  styleUrls: ['./edit-box.page.scss'],
})
export class EditBoxPage implements OnInit {

  boxes : any = []; 
  title : any;
  price : any;
  image : any;
  description : any;
  diet : any;
  brand : any;
  ingredients : any;
  id : any;

  constructor(
    public _authService : AuthService,
    public _apiService : ApiService,
    public navCtrl : NavController,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router : Router,
  ) { 
    this.getBoxes();
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      this.getSingleBoxes(this.id);
    })
  }

  ngOnInit() {
  }

  update(){
    let data = {
      title : this.title,
      price : this.price,
      image : this.image,
      description : this.description,
      diet : this.diet,
      brand : this.brand,
      ingredients : this.ingredients,
    }

    this._apiService.updateBoxes(this.id,data).subscribe((res:any) => {
      console.log("Success", res);
      this.success('Update successfully');
      // this.router.navigateByUrl('/bars');

    },(err:any) => {
      console.log("Error", err);
    })
  }

  getBoxes(){
    this._apiService.getBoxes().subscribe((res)=>{
      console.log("SUCCESS ===",res);
      this.boxes = res;
    }, (error: any) => {
      console.log("Error ===", error);
 
    })
  }

  getSingleBoxes(id){
    this._apiService.getSingleBoxes(id).subscribe((res:any) => {
      console.log("Success", res);
      let bar = res[0];
      this.id = bar.id;
      this.title = bar.title;
      this.price = bar.price;
      this.image = bar.image;
      this.description = bar.description;
      this.diet = bar.diet;
      this.brand = bar.brand;
      this.ingredients = bar.ingredients;
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
          handler : ()=>{
            this.router.navigateByUrl('/bars').then(()=>{
              location.reload();
            }) 
          } 
        },
   
      ],
    });
  
    alert.present();
  }


}
