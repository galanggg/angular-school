import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomepageComponent } from './homepage/homepage.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { AdminComponent } from './admin/admin.component'
import { SigninComponent } from './signin/signin.component'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { SharedModule } from './shared/shared.module'
import { AddSchoolComponent } from './admin/add-school/add-school.component'
import { AddAdminRegisComponent } from './admin/add-admin-regis/add-admin-regis.component'
import { MatListModule } from '@angular/material/list'
import { AdminSchoolComponent } from './admin-school/admin-school.component'
import { AssistRequestComponent } from './admin-school/assist-request/assist-request.component'
import { ViewRequestComponent } from './admin-school/view-request/view-request.component'
import { RequestTutorialFormComponent } from './admin-school/request-tutorial-form/request-tutorial-form.component'
import { RequestResourceFormComponent } from './admin-school/request-resource-form/request-resource-form.component'
import { MatSelectModule } from '@angular/material/select';
import { AddSchoolAdminComponent } from './admin/add-school-admin/add-school-admin.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminComponent,
    SigninComponent,
    AddSchoolComponent,
    AddAdminRegisComponent,
    AdminSchoolComponent,
    AssistRequestComponent,
    ViewRequestComponent,
    RequestTutorialFormComponent,
    RequestResourceFormComponent,
    AddSchoolAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    SharedModule,
    MatListModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
