import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToAddSchool() {
    this.router.navigate(['/admin/add-school'])
  }
  goToAdminRegis() {
    this.router.navigate(['/admin/add-admin-regis'])
  }
  logout() {
    this.router.navigate(['/'])
  }
}
