import { Directive, ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appOpacityscroll]'
})
export class OpacityscrollDirective {

  constructor( private el : ElementRef) { }



  @HostListener("document:scroll")
  scrollEffectFunction(){
    let elm = this.el.nativeElement;
    let elmHeight = this.el.nativeElement.clientHeight;
    elm.style.opacity = (((elmHeight - document.documentElement.scrollTop) / elmHeight) * 0.9) + 0.3;
  }

}
