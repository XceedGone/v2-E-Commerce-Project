import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private _authService : AuthService,
    private route : Router,
    private alertCtrl: AlertController,
    private router : Router,
    ){

  }

  canActivate(){
    if(this._authService.IsLoggedIn()){
      return true;
    }
    this.alert('Log in First')
    this.route.navigate(['login']);
    return false;
  }


  async alert(a) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: a,
      buttons: [
        {
          text: 'Ok',
          handler : ()=>{
            this.router.navigateByUrl('/login').then(()=>{
              location.reload();
            }) 
          } 
        },
      ],
    });
  
    alert.present();
  }
    
  
  
 
}
 