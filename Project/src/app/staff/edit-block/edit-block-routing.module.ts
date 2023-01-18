import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBlockPage } from './edit-block.page';

const routes: Routes = [
  {
    path: '',
    component: EditBlockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBlockPageRoutingModule {}
