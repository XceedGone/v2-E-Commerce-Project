import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { Food2Service } from 'src/app/services/food2.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import {ModalController} from '@ionic/angular';
import { Detail2Page } from '../detail2/detail2.page';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-listing2',
  templateUrl: './listing2.page.html',
  styleUrls: ['./listing2.page.scss'],
})
export class Listing2Page implements OnInit {
  categories: Category[] = [];
 // foods: Food[] = [];
  id: number;
  food2: Food;
  public products: Food[] = [];

  constructor(
    private food2Service: Food2Service,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private toastCtrl: ToastController,
    private modalController: ModalController,
    public _apiService : ApiService,
    ) {
      this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    // this.foods = this.food2Service.getFoods();
    // console.log(this.foods);
    // this.food2 = this.food2Service.getFood(this.id);
    this.getAllProd();
  }

  getAllProd(){ 
    this._apiService.prodList2().subscribe((res:any) =>{
    //  console.log("SUCCESS ===",res);
      this.products = res;
    }, (error: any) => {
      console.log("Error ===", error);
  })
  }


  goToDetailPage(id: number) {
  /*  this.modalController.create({component: DetailPage }).then((modalElement)=>{
      modalElement.present();
    }) */
    this.router.navigate(['detail2', id]);
    

  }

  addItemToCart() {
    const cartitem: CartItem = {
      id: this.food2.id,
      name: this.food2.title,
      price: this.food2.price,
      image: this.food2.image,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
    
  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Food added to the cart',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }
}
