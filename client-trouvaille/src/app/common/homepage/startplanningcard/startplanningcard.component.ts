import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startplanningcard',
  templateUrl: './startplanningcard.component.html',
  styleUrls: ['./startplanningcard.component.css']
})
export class StartplanningcardComponent {

  constructor(private router: Router){}

  startPlanning(){
    this.router.navigate(['plan/create']);
  }

}
