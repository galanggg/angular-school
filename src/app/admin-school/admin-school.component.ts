import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-school',
  templateUrl: './admin-school.component.html',
  styleUrls: ['./admin-school.component.scss'],
})
export class AdminSchoolComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToAddSchool() {
    this.router.navigate(['/admin/add-school'])
  }
  goToAdminRegis() {
    this.router.navigate(['/admin/add-admin-regis'])
  }
  goToAssistRequest() {
    this.router.navigate(['/admin-school/assist-request'])
  }
  logout() {
    this.router.navigate(['/'])
  }
}
