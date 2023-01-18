import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.page.html',
  styleUrls: ['./blocks.page.scss'],
})
export class BlocksPage implements OnInit {
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
  ) { 
    this.getBlocks();
  }

  ngOnInit() {
  }

  addBlocks(){
    let data = {
      title : this.title,
      price : this.price,
      image : this.image,
      description : this.description,
      diet : this.diet,
      brand : this.brand,
      ingredients : this.ingredients,
    }
    
    this._apiService.addBlocks(data).subscribe((res:any) =>{
      console.log("SUCCESS ===",res);
      alert('SUCCESS');
      this.getBlocks();
      location.reload();
    }, (error: any) => {
      console.log("Error ===", error);
      alert('ERROR');
  })
  }

  update(){
    let id = this.id;
    let data = {
      title : this.title,
      price : this.price,
      image : this.image,
      description : this.description,
      diet : this.diet,
      brand : this.brand,
      ingredients : this.ingredients,
    }

    this._apiService.updateBlocks(id,data).subscribe((res:any) => {
      console.log("Success", res);
      location.reload();
      this.success('Update successfully');
      //this.router.navigateByUrl('/home');

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

  async delBlocks(id) {
    const alert = await this.alertCtrl.create({
      header: 'Do you want to remove this product from the list?',  
      buttons: [
        {
          text: 'Yes',  
          handler: () => {
            this._apiService.delBlocks(id).subscribe((res:any) =>{
              console.log("Success");
              this.getBlocks();
            },(err:any) =>{
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

  async success(a) {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: a,
      buttons: [
        {
          text: 'Ok',
          handler : ()=>{
            location.reload();
          } 
        },
   
      ],
    });
  
    alert.present();
  }

 

}
