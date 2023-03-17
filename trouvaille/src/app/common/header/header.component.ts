import { Component, HostListener, OnInit} from '@angular/core';
import { Router, NavigationEnd, Event  } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentRoute: string = "";
  scrollEffect: boolean = false;
  routerEvent$: any;

  constructor(private router: Router,
              private modalService: NgbModal){

    this.routerEvent$ = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
            console.log(event);
      }});

      
  }

  ngOnInit(): void {
    
  }

  openLoginModal() {
    console.log("login btn clicked");
    const modalRef = this.modalService.open(LoginComponent, { centered: true });
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
