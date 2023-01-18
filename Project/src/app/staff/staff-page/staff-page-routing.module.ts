import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffPagePage } from './staff-page.page';

const routes: Routes = [
  {
    path: '',
    component: StaffPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffPagePageRoutingModule {}
