import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffPagePageRoutingModule } from './staff-page-routing.module';

import { StaffPagePage } from './staff-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffPagePageRoutingModule
  ],
  declarations: [StaffPagePage]
})
export class StaffPagePageModule {}
