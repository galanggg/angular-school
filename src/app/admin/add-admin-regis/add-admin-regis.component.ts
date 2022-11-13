import { Component, OnInit } from '@angular/core'
import { Form, FormBuilder } from '@angular/forms'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { LocalService } from 'src/app/local.service'
@Component({
  selector: 'app-add-admin-regis',
  templateUrl: './add-admin-regis.component.html',
  styleUrls: ['./add-admin-regis.component.scss'],
})
export class AddAdminRegisComponent implements OnInit {
  listSchool: any
  constructor(
    private router: Router,
    private localService: LocalService,
    private readonly formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.listSchool = JSON.parse(this.localService.getData('school')!)
    console.log(this.listSchool)
  }
  goToAdminPage() {
    this.router.navigate(['/admin'])
  }

  goToAddSchool() {
    this.router.navigate(['/admin/add-school'])
  }

  goToAddSchoolAdmin() {
    this.router.navigate(['admin/add-admin-school'])
  }

  logout() {
    this.router.navigate(['/'])
  }
}
