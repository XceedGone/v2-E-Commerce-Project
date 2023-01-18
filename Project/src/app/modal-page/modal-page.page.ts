import { Component, OnInit } from '@angular/core';
 
import { ModalController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
 
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { AlertController, NavController, } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage{
  cartItems$: Observable<CartItem[]>;
  totalAmount$: Observable<number>;
  fullAmount$: Observable<number>;
  cash : number;
  total : number;
  userChange : number;
  id : any;
  adrs: any;

  constructor(
    private modalCtrl: ModalController,
    public _apiService : ApiService,
    private cartService: CartService,
    public navCtrl : NavController,
    private _authService : AuthService,
    ) {
      this.change();
    }

    ngOnInit() {
      this.cartItems$ = this.cartService.getCart();
      this.fullAmount$ = this.cartService.getFullAmount(); //gets the overall amount to pay 
      this.totalAmount$ = this.cartService.getTotalAmount();
      this.id = this._authService.user.id; // current user ID 
      this.fullAmount$.subscribe((res)=>{
        this.total = res;
      })
      this.change();  
    }
    change(){
      this._apiService.getUser(this.id).subscribe((res)=>{
        let userCreds = res[0];
        this.userChange = userCreds.money;
        this.adrs = userCreds.adrs;
        console.log(this.userChange);
        console.log(this.adrs);
      })
    }

     

  // cancel() {
  //   return this.modalCtrl.dismiss(null, 'cancel');
  // }

  confirm() {
    // location.reload();
    this.navCtrl.navigateRoot(['/home-page/cart']).then(()=>{
      location.reload();
    })
    return this.modalCtrl.dismiss('confirm');
  }

}
