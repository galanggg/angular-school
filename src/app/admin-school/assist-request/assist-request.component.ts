import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-assist-request',
  templateUrl: './assist-request.component.html',
  styleUrls: ['./assist-request.component.scss'],
})
export class AssistRequestComponent implements OnInit {
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
  goToFormResources() {
    this.router.navigate(['admin-school/assist-request/add-resource'])
  }
  logout() {
    this.router.navigate(['/'])
  }
}
