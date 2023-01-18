import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
import { AlertController, NavController, } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ModalPagePage } from 'src/app/modal-page/modal-page.page';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage{
  fullAmount$: Observable<number>;
  id : any;
//  fullAmount$: number;
  fullAmount : number;
  userMoney : number; 
  money : number;
  change : any;
  
  message = 'This modal example uses the modalController to present and dismiss modals.';


  constructor(
    private modalCtrl: ModalController,
    private cartService: CartService,
    private alertCtrl: AlertController,
    public _apiService : ApiService,
    private _authService : AuthService,
    public navCtrl : NavController,
    ) {
      this.fullAmount$ = this.cartService.getFullAmount(); //gets the overall amount to pay 
      this.getFull();
      this.id = this._authService.user.id;  
      this.getMoney();
      
      // console.log(this.fullAmount); //total 
    //  console.log(this.getCash()); // user money
      // console.log(this.userMoney - this.fullAmount);    
    }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  getFull(){
    this.fullAmount$.subscribe((res)=>{
      this.fullAmount = res;
      console.log(this.fullAmount);
    });
  }

  getMoney(){
    this._apiService.getUser(this.id).subscribe((res)=>{
      let userCred = res[0];
      this.userMoney = userCred.money;
      console.log(this.userMoney);
    })
  }
 
 

  // getCash(){
  //   this._apiService.getCash(this.id).subscribe((res : number)=>{
  //     let money = res[0];
  //     this.userMoney = money.money;
  //     console.log(this.userMoney);
        
  //   })
  // }

// async checkOut(){
//     var cash;
//     let money;
//     let data ={
//       money,
//     }

//     this.id = this._authService.user.id;
//     cash = this._authService.user.money;

//     // console.log(cash);

//     //this.fullAmount$.subscribe((res)=>{
     
//       if(data.money >= 0){
//         console.log('Sufficient Fund. Change is ' + data.money);
//         this.confirm().then(()=>{
//           this._apiService.cashIn(this.id, data).subscribe((res:any) => {
//             console.log("Success", res);
//           },(err:any) => {
//             console.log("Error", err);
//           })
//         })
        

//       }else {
//         //alert('Inufficient Fund. Negative value of ' + data.money);
//         console.log('Inufficient Fund. Negative value of ' + data.money);
//         this.notConfirm();       
//       }
//  //   })
//   }


async checkOut(){  
  this.money =  this.userMoney - this.fullAmount;
    if(this.money >= 0){
      console.log('Enough Fund ' + this.money);
      this.confirm();
    }else {
      this.notConfirm();
      console.log('Not enough Fund. ' +this.money);
    }

}

  async confirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Checkout',
      message:'Are you sure you want to Buy this item/s?',
      buttons: [
        {
          text: 'Yes',  
          handler: () => {
            let data = {
              money : this.money,
            }
            this._apiService.cashIn(this.id, data).subscribe((res:any) => {
              console.log("Success Update", res);
            },(err:any) => {
              console.log("Error", err);
            })

            this.openModal().then(()=>{
              this.cartService.removeAllItem();
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

  async notConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid Request',
      message: 'Inufficient Fund.',
      buttons: [
        {
          text: 'Okay',      
        },
     
      ],
    });
    alert.present();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPagePage,
    });
    modal.present();
    const {role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.navCtrl.navigateRoot(['/home']);
    }
  }
}
