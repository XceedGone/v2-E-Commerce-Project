import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { ModalController, NavController} from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';
import { ApiService } from '../../api.service';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  //products : Food[] = [];
  id: number;
  food: Food;
 // public products  = [];
  public products: Food[] = [];

  constructor(
    private foodService: FoodService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private toastCtrl: ToastController,
    private modalController: ModalController,
    private storage : Storage,
    public navCtrl : NavController,
    private _authService : AuthService,
    public _apiService : ApiService,
    ) {
     //this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    //  this.route.params.subscribe((param:any) =>{
    //   this.id = param.id;
    //   console.log(this.id);
    //   this.getProdId(this.id)
    //   })
    }
  ngOnInit() {
    
    this.getAllProd();

   // this.food = this.foodService.getFood(this.id);
  }

  getAllProd(){ 
    this._apiService.prodList().subscribe((res:any) =>{
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
    this.router.navigate(['detail', id]); 
  }
  addItemToCart() {
    const cartitem: CartItem = {
      id: this.food.id,
      name: this.food.title,
      price: this.food.price,
      image: this.food.image,
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
