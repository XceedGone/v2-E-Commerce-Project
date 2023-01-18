import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.page.html',
  styleUrls: ['./boxes.page.scss'],
})
export class BoxesPage implements OnInit {
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
  ) { 
    this.getBoxes();
  }

  ngOnInit() {
  }

  addBoxes(){ 
    let data = {
      title : this.title,
      price : this.price,
      image : this.image,
      description : this.description,
      diet : this.diet,
      brand : this.brand,
      ingredients : this.ingredients,
    }
    
    this._apiService.addBoxes(data).subscribe((res:any) =>{
      console.log("SUCCESS ===",res);
      alert('SUCCESS');
      this.getBoxes();
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

    this._apiService.updateBoxes(id,data).subscribe((res:any) => {
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

 
  async delBoxes(id) {
    const alert = await this.alertCtrl.create({
      header: 'Do you want to remove this product from the list?',  
      buttons: [
        {
          text: 'Yes',  
          handler: () => {
            this._apiService.delBoxes(id).subscribe((res:any) =>{
              console.log("Success");
              this.getBoxes();
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
