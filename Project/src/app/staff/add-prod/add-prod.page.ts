import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.page.html',
  styleUrls: ['./add-prod.page.scss'],
})
export class AddProdPage implements OnInit {
  bars : any = [];
  blocks : any = [];
  boxes : any = [];
  title : string ="";
  price : string ="";
  image : string ="";
  description : string ="";
  diet : string ="";
  brand : string ="";
  ingredients : string ="";
  id : string ="";
  cat : string ="";

  constructor(
    public _authService : AuthService,
    public _apiService : ApiService,
    public navCtrl : NavController,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router : Router,
  ) { 
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

    if(this.cat == "Bars"){
      console.log('Add chocolate bars');
      if(this.title == ""){
        this.error('Forms Cannot be empty!');
      }else if(this.price == ""){
        this.error('Forms Cannot be empty!');
      }else if (this.image == ""){
        this.error('Forms Cannot be empty!');
      }else if(this.description == ""){
        this.error('Forms Cannot be empty!');
      }else if (this.diet == ""){
        this.error('Forms Cannot be empty!');
      }else if(this.brand == ""){
        this.error('Forms Cannot be empty!');
      }else if (this.ingredients == ""){
        this.error('Forms Cannot be empty!');
      }else{
        this._apiService.addBars(data).subscribe((res:any) =>{
          console.log("SUCCESS ===",res);
          this.getBars();
          this.success('Added Successfully');
        }, (error: any) => {
          console.log("Error ===", error);
          this.error('Error =' + error);
        })
      }
    }else if(this.cat == "Blocks"){
      console.log('Add Chocolate Blocks');
      if(this.title == ""){
        this.error('Forms Cannot be empty!');
      }else if(this.price == ""){
        this.error('Forms Cannot be empty!');
      }else if (this.image == ""){
        this.error('Forms Cannot be empty!');
      }else if(this.description == ""){
        this.error('Forms Cannot be empty!');
      }else if (this.diet == ""){
        this.error('Forms Cannot be empty!');
      }else if(this.brand == ""){
        this.error('Forms Cannot be empty!');
      }else if (this.ingredients == ""){
        this.error('Forms Cannot be empty!');
      }else{
        this._apiService.addBlocks(data).subscribe((res:any) =>{
          console.log("SUCCESS ===",res);
          this.getBlocks();
          this.success('Added Successfully');
        }, (error: any) => {
          console.log("Error ===", error);
          this.error('Error =' + error);
      })
     }
    }else if(this.cat == "Boxes"){
      console.log('Add chocolate boxes');
      if(this.title == ""){
        this.error('Forms Cannot be empty!');
      }else if(this.price == ""){
        this.error('Forms Cannot be empty!');
      }else if (this.image == ""){
        this.error('Forms Cannot be empty!');
      }else if(this.description == ""){
        this.error('Forms Cannot be empty!');
      }else if (this.diet == ""){
        this.error('Forms Cannot be empty!');
      }else if(this.brand == ""){
        this.error('Forms Cannot be empty!');
      }else if (this.ingredients == ""){
        this.error('Forms Cannot be empty!');
      }else{
      this._apiService.addBoxes(data).subscribe((res:any) =>{
        console.log("SUCCESS ===",res);
        this.getBoxes();
        this.success('Added Successfully');
      }, (error: any) => {
        console.log("Error ===", error);
        this.error('Error =' + error);
     })
    }
    }else{
      console.log('Please Enter Category');
      this.error('Please Enter Category');
    }

    // let data = {
    //   title : this.title,
    //   price : this.price,
    //   image : this.image,
    //   description : this.description,
    //   diet : this.diet,
    //   brand : this.brand,
    //   ingredients : this.ingredients,
    // }
    
    // this._apiService.addBars(data).subscribe((res:any) =>{
    //   console.log("SUCCESS ===",res);
    //   alert('SUCCESS');
    //   this.getBars();
    //   location.reload();
    // }, (error: any) => {
    //   console.log("Error ===", error);
    //   alert('ERROR');
    // })
  }
  
  getBars(){
    this._apiService.getBars().subscribe((res)=>{
      console.log("SUCCESS ===",res);
      this.bars = res;
    }, (error: any) => {
      console.log("Error ===", error);
 
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

  getBoxes(){
    this._apiService.getBoxes().subscribe((res)=>{
      console.log("SUCCESS ===",res);
      this.boxes = res;
    }, (error: any) => {
      console.log("Error ===", error);
 
    })
  }

  async error(a) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: a,
      buttons: [
        {
          text: 'Ok',
          // handler : ()=>{
          //   location.reload();
          // } 
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
