import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
//import { AccessProviders } from './providers/access-providers';
// import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule, FormsModule 
  ],
  providers: [
  { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
