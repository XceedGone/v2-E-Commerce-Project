import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, ActivatedRoute, Route} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { NavController, AlertController } from '@ionic/angular';
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private _authService : AuthService,
    public navCtrl : NavController,
    private location: Location,
    private route : Router,
    private router : Router,
    private alertCtrl: AlertController,
    ){

  }

  canActivate(
    route : ActivatedRouteSnapshot
  ){
    const isAuth = this._authService.user.role.includes(route.data.role);

    if(!isAuth){
      // window.alert('This is for '+ route.data.role +' only');
      // this.route.navigate(['home']);
      this.alert('This is for '+ route.data.role +' only')
    }


    return isAuth;
  
  }

  async alert(a) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: a,
      buttons: [
        {
          text: 'Ok',
          handler : ()=>{
            this.router.navigateByUrl('/home').then(()=>{
              location.reload();
            }) 
          } 
        },
      ],
    });
  
    alert.present();
  }
  
}
