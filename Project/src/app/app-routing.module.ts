import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'about-app',
    loadChildren: () => import('./pages/about-app/about-app.module').then( m => m.AboutAppPageModule)
  },
  {
    path: 'devs',
    loadChildren: () => import('./pages/devs/devs.module').then( m => m.DevsPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./screens/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'listing',
    loadChildren: () =>
      import('./screens/listing/listing.module').then((m) => m.ListingPageModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./screens/detail/detail.module').then((m) => m.DetailPageModule),
  },
  {
    path: 'detail2/:id',
    loadChildren: () =>
      import('./screens/detail2/detail2.module').then((m) => m.Detail2PageModule),
  },
  {
    path: 'detail3/:id',
    loadChildren: () =>
      import('./screens/detail3/detail3.module').then((m) => m.Detail3PageModule),
  },
  {
    path: 'home-page',
    loadChildren: () => import('./screens/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'listing2',
    loadChildren: () => import('./screens/listing2/listing2.module').then( m => m.Listing2PageModule)
  },
  {
    path: 'listing3',
    loadChildren: () => import('./screens/listing3/listing3.module').then( m => m.Listing3PageModule)
  },
  {
    path: 'aboutprod',
    loadChildren: () => import('./pages/aboutprod/aboutprod.module').then( m => m.AboutprodPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'tab-page2',
    loadChildren: () => import('./screens/tab-page2/tab-page2.module').then( m => m.TabPage2PageModule)
  },
  {
    path: 'tab-page3',
    loadChildren: () => import('./screens/tab-page3/tab-page3.module').then( m => m.TabPage3PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'crud/:id',
    loadChildren: () => import('./crud/crud.module').then( m => m.CrudPageModule), 
    // canActivate:[RoleGuard]
  },
  {
    path: 'edit-profile/:id',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'admin-page',
    loadChildren: () => import('./admin/admin-page/admin-page.module').then( m => m.AdminPagePageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Admin',
    }
  },
  {
    path: 'staff-page',
    loadChildren: () => import('./staff/staff-page/staff-page.module').then( m => m.StaffPagePageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Staff',
    }
  },
  {
    path: 'admins',
    loadChildren: () => import('./admin/admins/admins.module').then( m => m.AdminsPageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Admin',
    }
  },
  {
    path: 'users',
    loadChildren: () => import('./admin/users/users.module').then( m => m.UsersPageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Admin',
    }
  },
  {
    path: 'staffs',
    loadChildren: () => import('./admin/staffs/staffs.module').then( m => m.StaffsPageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Admin',
    }
  },
  {
    path: 'requests',
    loadChildren: () => import('./admin/requests/requests.module').then( m => m.RequestsPageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Admin',
    }
  },
  {
    path: 'verification/:id',
    loadChildren: () => import('./admin/verification/verification.module').then( m => m.VerificationPageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Admin',
    }
  },
  {
    path: 'bars',
    loadChildren: () => import('./staff/bars/bars.module').then( m => m.BarsPageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Staff',
    }
  },
  {
    path: 'blocks',
    loadChildren: () => import('./staff/blocks/blocks.module').then( m => m.BlocksPageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Staff',
    }
  },
  {
    path: 'boxes',
    loadChildren: () => import('./staff/boxes/boxes.module').then( m => m.BoxesPageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Staff',
    }
  },
  {
    path: 'add-prod',
    loadChildren: () => import('./staff/add-prod/add-prod.module').then( m => m.AddProdPageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Staff',
    }
  },
  {
    path: 'edit-prod/:id',
    loadChildren: () => import('./staff/edit-prod/edit-prod.module').then( m => m.EditProdPageModule),
    canActivate:[RoleGuard],
    data: {
      role : 'Staff',
    }
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  {
    path: 'edit-block/:id',
    loadChildren: () => import('./staff/edit-block/edit-block.module').then( m => m.EditBlockPageModule)
  },
  {
    path: 'edit-box/:id',
    loadChildren: () => import('./staff/edit-box/edit-box.module').then( m => m.EditBoxPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
