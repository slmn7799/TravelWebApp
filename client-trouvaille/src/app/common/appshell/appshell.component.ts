import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, Event  } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-appshell',
  templateUrl: './appshell.component.html',
  styleUrls: ['./appshell.component.css']
})
export class AppshellComponent {

  currentRoute: string = "";
  // currentRoute: Observable<string>
  scrollEffect: boolean = false;
  routerEvent$: any;

  constructor(private router: Router){

    this.routerEvent$ = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
            // console.log(event);salman
      }});

    }


  @HostListener("document:scroll")
  scrollEffectFunction(){

    if((this.currentRoute === "/home") || (this.currentRoute === "/")){
      if((document.body.scrollTop > 40) || (document.documentElement.scrollTop > 40)){
        this.scrollEffect = true;
      } else {
        this.scrollEffect = false;
      }
    }
    
    (this.currentRoute === "/plan/create") && (this.scrollEffect = true);
  }

}
