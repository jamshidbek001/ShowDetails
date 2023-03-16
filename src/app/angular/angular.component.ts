import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  title = 'Angualar';

  constructor(private enrollService: EnrollService) {}

  OnEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
}
