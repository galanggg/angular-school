import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-request-resource-form',
  templateUrl: './request-resource-form.component.html',
  styleUrls: ['./request-resource-form.component.scss'],
})
export class RequestResourceFormComponent implements OnInit {
  foods = [
    { value: 'computer', viewValue: 'Computer' },
    { value: 'laptop', viewValue: 'Laptop' },
    { value: 'wifi', viewValue: 'Wifi' },
  ]
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToViewRequest() {
    this.router.navigate(['/admin-school/view-request'])
  }
  goToAssistRequest() {
    this.router.navigate(['/admin-school/assist-request'])
  }
  goToFormTutorial() {
    this.router.navigate(['admin-school/assist-request/add-tutorial'])
  }

  logout() {
    this.router.navigate(['/'])
  }
}
