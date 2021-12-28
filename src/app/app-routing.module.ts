import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareAreaComponent } from './care-area/care-area.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path: 'care-area',
    component : CareAreaComponent
  },
  {
    path: 'user-management',
    component : UserManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
