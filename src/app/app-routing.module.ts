import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddAdminRegisComponent } from './admin/add-admin-regis/add-admin-regis.component'
import { AddSchoolComponent } from './admin/add-school/add-school.component'
import { AdminComponent } from './admin/admin.component'
import { HomepageComponent } from './homepage/homepage.component'
import { SigninComponent } from './signin/signin.component'

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },

  {
    path: 'admin/add-school',
    component: AddSchoolComponent,
  },

  {
    path: 'admin/add-admin-regis',
    component: AddAdminRegisComponent,
  },

  {
    path: 'signin',
    component: SigninComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
