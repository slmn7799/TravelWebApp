import { Component, HostListener, OnInit} from '@angular/core';
import { Router, NavigationEnd, Event  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentRoute: string = "";
  scrollEffect: boolean = false;
  routerEvent$: any;

  constructor(private router: Router){

    this.routerEvent$ = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
            console.log(event);
      }});

      
  }

  ngOnInit(): void {
    
  }

  homeClick(){
    // this.scrollEffect = false;
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
