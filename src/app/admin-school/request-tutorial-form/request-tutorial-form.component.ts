import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-request-tutorial-form',
  templateUrl: './request-tutorial-form.component.html',
  styleUrls: ['./request-tutorial-form.component.scss'],
})
export class RequestTutorialFormComponent implements OnInit {
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
