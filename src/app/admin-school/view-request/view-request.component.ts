import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LocalService } from 'src/app/local.service'

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.scss'],
})
export class ViewRequestComponent implements OnInit {
  listRequest = [
    {
      id: 919191991,
      date: '22/12/2022',
      status: 'Done',
    },
    {
      id: 938383838,
      date: '24/12/2022',
      status: 'Pending',
    },
  ]

  constructor(private router: Router, private localService: LocalService) {}

  ngOnInit(): void {}
  goToViewRequest() {
    this.router.navigate(['/admin-school/view-request'])
  }
  goToAssistRequest() {
    this.router.navigate(['/admin-school/assist-request'])
  }

  logout() {
    this.router.navigate(['/'])
  }
}
