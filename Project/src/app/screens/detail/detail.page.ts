import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
   food: Food;
  private qtyNum = 1
  // public food: Food[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalController: ModalController,
    public navCtrl : NavController,
    public _apiService : ApiService,
    private storage : Storage,
    private _authService : AuthService,
    private route : Router,
  ) {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
   this.food = this.foodService.getFood(this.id);
  //  this.addItemToCart();
 
 
  }

 
  // getProdId(){ 
  //   this._apiService.prodID(this.id).subscribe((res:any) =>{
  //     console.log("SUCCESS ===",res);
  //     this.food = res;
  //   }, (error: any) => {
  //     console.log("Error ===", error);
  // })
  // }


  addItemToCart() {
    if(this._authService.IsLoggedIn()){
      const cartitem: CartItem = {
        id: this.food.id,
        name: this.food.title,
        price: this.food.price,
        image: this.food.image,
        quantity: 1,
      };
      this.cartService.addToCart(cartitem);
      this.presentToast();     
    }else{
      this.error('Login First');
      // alert('Log in First');
      
    }    
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Item added to the cart',
      mode: 'ios',
      duration: 1000,
      position: 'bottom',
    });

    toast.present();
  }

  closeModal(){
    this.modalController.dismiss();
  }

  addVal(){
    this.qtyNum++;
  }
  delVal(){
    this.qtyNum--;
  }

//   async error() {
//     const alert = await this.alertCtrl.create({
//       header: 'Error',
//       message: 'Log in First',
//       buttons: [
//         {
//           text: 'Ok',
//           handler : ()=>{
//             this.route.navigate(['login']);
//           } 
//         },
   
//       ],
//     });
    
// }

async error(a) {
  const alert = await this.alertCtrl.create({
    header: 'Error',
    message: a,
    buttons: [
      {
        text: 'Ok',
        handler : ()=>{
          this.route.navigateByUrl('/login').then(()=>{
            location.reload();
          }) 
        } 
      },
    ],
  });

  alert.present();
}

}
