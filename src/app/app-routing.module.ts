import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminSchoolComponent } from './admin-school/admin-school.component'
import { AssistRequestComponent } from './admin-school/assist-request/assist-request.component'
import { RequestResourceFormComponent } from './admin-school/request-resource-form/request-resource-form.component'
import { RequestTutorialFormComponent } from './admin-school/request-tutorial-form/request-tutorial-form.component'
import { ViewRequestComponent } from './admin-school/view-request/view-request.component'
import { AddAdminRegisComponent } from './admin/add-admin-regis/add-admin-regis.component'
import { AddSchoolAdminComponent } from './admin/add-school-admin/add-school-admin.component'
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
    path: 'admin/add-admin-school',
    component: AddSchoolAdminComponent,
  },
  {
    path: 'admin-school',
    component: AdminSchoolComponent,
  },

  {
    path: 'admin-school/assist-request',
    component: AssistRequestComponent,
  },

  {
    path: 'admin-school/view-request',
    component: ViewRequestComponent,
  },

  {
    path: 'admin-school/assist-request/add-tutorial',
    component: RequestTutorialFormComponent,
  },
  {
    path: 'admin-school/assist-request/add-resource',
    component: RequestResourceFormComponent,
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
