import { Component, OnInit } from '@angular/core';
import { AlertController, AnimationKeyFrames } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
 
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems$: Observable<CartItem[]>;
  totalAmount$: Observable<number>;
  fullAmount$: Observable<number>;
  cash : number;
  total : number;
  id : any;

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController,
    public _apiService : ApiService,
    private _authService : AuthService,
  ) {
  
  }

  ngOnInit() {
    this.cartItems$ = this.cartService.getCart();
    this.fullAmount$ = this.cartService.getFullAmount(); //gets the overall amount to pay 
    this.totalAmount$ = this.cartService.getTotalAmount();
 
  }

 
  onIncrease(item: CartItem) {
    this.cartService.changeQty(1, item.id);
  }

  onDecrease(item: CartItem) {
    if (item.quantity === 1) this.removeFromCart(item);
    else this.cartService.changeQty(-1, item.id);
  }

  // checkOut(){
  //   let cash;
  //   let total;
  //   cash = this._authService.user.money;
  //   this.fullAmount$.subscribe((res)=>{
  //     total = cash - res; 
  //     this.confirm();
  //     if(total >= 0){
  //       console.log('Sufficient Fund. Change is ' + total);
  //     }else {
  //       console.log('Inufficient Fund. Negative value of ' + total);
  //     }
  //   })
  // }

  async removeFromCart(item: CartItem) {
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure you want to remove this item?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.cartService.removeItem(item.id),
        },
        {
          text: 'No',
        },
      ],
    });

    alert.present();
  }

  // async confirm() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Confirm Checkout',
  //     message: 'Are you sure you want to Buy this item/s?',
  //     buttons: [
  //       {
  //         text: 'Yes',
          
  //        handler: () => location.reload(),
  //       },
  //       {
  //         text: 'No',
  //       },
  //     ],
  //   });

  //   alert.present();
  // }

}
