import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-list',
    pathMatch: 'full'
  },
  {
    path: 'users-list',
    loadChildren: () => import('./users-list/users-list.module').then( m => m.UsersListPageModule)
  },
  {
    path: 'user-details/:id',
    loadChildren: () => import('./user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
