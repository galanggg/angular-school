import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { LocalService } from 'src/app/local.service'

@Component({
  selector: 'app-add-school-admin',
  templateUrl: './add-school-admin.component.html',
  styleUrls: ['./add-school-admin.component.scss'],
})
export class AddSchoolAdminComponent implements OnInit {
  constructor(
    private router: Router,
    private localService: LocalService,
    private readonly formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {}

  goToAdminPage() {
    this.router.navigate(['/admin'])
  }

  goToAdminRegis() {
    this.router.navigate(['admin/add-admin-regis'])
  }

  logout() {
    this.router.navigate(['/'])
  }
}
