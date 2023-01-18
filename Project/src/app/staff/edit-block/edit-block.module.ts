import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBlockPageRoutingModule } from './edit-block-routing.module';

import { EditBlockPage } from './edit-block.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditBlockPageRoutingModule
  ],
  declarations: [EditBlockPage]
})
export class EditBlockPageModule {}
