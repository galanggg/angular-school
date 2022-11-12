import { Component, OnInit } from '@angular/core'
import { Form, FormBuilder } from '@angular/forms'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { LocalService } from 'src/app/local.service'

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss'],
})
export class AddSchoolComponent implements OnInit {
  form = this.formBuilder.group({
    school: [null],
    address: [null],
    city: [null],
  })
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

  submitForm() {
    if (this.localService.getData('school') !== null) {
      console.log('execute1')
      let a = JSON.parse(this.localService.getData('school')!)
      a.push(this.form.value)
      this.localService.saveData('school', JSON.stringify(a))
      this.form.reset()
      return
    }
    console.log('execute2')
    this.localService.saveData('school', JSON.stringify([this.form.value]))
    this.form.reset()
  }

  getvalue() {
    let a = JSON.parse(this.localService.getData('school')!)
    console.log(a)
  }
}
