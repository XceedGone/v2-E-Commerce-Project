import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBoxPageRoutingModule } from './edit-box-routing.module';

import { EditBoxPage } from './edit-box.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditBoxPageRoutingModule
  ],
  declarations: [EditBoxPage]
})
export class EditBoxPageModule {}
