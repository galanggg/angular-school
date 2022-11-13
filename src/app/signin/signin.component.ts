import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ToastNotificationComponent } from '../shared/toast-notification/toast-notification.component'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  credentials = {
    username: 'schoolHelp@email.com',
    password: 'admin123',
  }

  credentials2 = {
    username: 'adminschool@email.com',
    password: 'admin123',
  }
  form = this.formBuilder.group({
    username: [null],
    password: [null],
  })
  constructor(
    private router: Router,
    private readonly formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {}

  goToHomePage() {
    this.router.navigate(['/'])
  }

  openSnackBar(condition: string) {
    this._snackBar.openFromComponent(ToastNotificationComponent, {
      duration: 5 * 1000,
      data: { condition },
    })
  }

  submitForm() {
    console.log(this.form.value)
    if (JSON.stringify(this.form.value) === JSON.stringify(this.credentials)) {
      this.openSnackBar('true')
      this.router.navigate(['admin'])
      return
    }
    if (JSON.stringify(this.form.value) === JSON.stringify(this.credentials2)) {
      this.openSnackBar('true')
      this.router.navigate(['admin-school/assist-request'])
      return
    }
    this.openSnackBar('false')
  }
}
