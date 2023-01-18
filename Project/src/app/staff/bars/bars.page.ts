import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
 
@Component({
  selector: 'app-bars',
  templateUrl: './bars.page.html',
  styleUrls: ['./bars.page.scss'],
})
export class BarsPage implements OnInit {
  bars : any = [];
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
    this.getBars();
    
   }

  ngOnInit() {
  }

  addBars(){
    let data = {
      title : this.title,
      price : this.price,
      image : this.image,
      description : this.description,
      diet : this.diet,
      brand : this.brand,
      ingredients : this.ingredients,
    }
    
    this._apiService.addBars(data).subscribe((res:any) =>{
      console.log("SUCCESS ===",res);
      alert('SUCCESS');
      this.getBars();
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

    this._apiService.updateBars(id,data).subscribe((res:any) => {
      console.log("Success", res);
      this.success('Update successfully');
      // this.router.navigateByUrl('/bars');
      

    },(err:any) => {
      console.log("Error", err);
    })
  }

  getSingleBars(id){
    this._apiService.getSingleBars(id).subscribe((res:any) => {
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


  getBars(){
    this._apiService.getBars().subscribe((res)=>{
      console.log("SUCCESS ===",res);
      this.bars = res;
    }, (error: any) => {
      console.log("Error ===", error);
 
    })
  }

 
  async delBars(id) {
    const alert = await this.alertCtrl.create({
      header: 'Do you want to remove this product from the list?',  
      buttons: [
        {
          text: 'Yes',  
          handler: () => {
            this._apiService.delBars(id).subscribe((res:any) =>{
              console.log("Success");
              this.getBars();  
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
