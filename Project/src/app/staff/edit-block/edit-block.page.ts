import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { NavController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.page.html',
  styleUrls: ['./edit-block.page.scss'],
})
export class EditBlockPage implements OnInit {
  blocks : any = []; 
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
    this.getBlocks();
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      this.getSingleBlocks(this.id);
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

    this._apiService.updateBlocks(this.id,data).subscribe((res:any) => {
      console.log("Success", res);
      this.success('Update successfully');
    },(err:any) => {
      console.log("Error", err);
    })
  }

  getBlocks(){
    this._apiService.getBlocks().subscribe((res)=>{
      console.log("SUCCESS ===",res);
      this.blocks = res;
    }, (error: any) => {
      console.log("Error ===", error);
 
    })
  }

  getSingleBlocks(id){
    this._apiService.getSingleBlocks(id).subscribe((res:any) => {
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
