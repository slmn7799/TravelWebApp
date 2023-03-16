import { Directive , ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appRightscroll]'
})
export class RightscrollDirective {

  constructor( private el : ElementRef) { 
  }

  @HostListener('click')
  rightFunc(){
    let elm = this.el.nativeElement.parentElement.children[2];
    let item = elm.getElementsByClassName('item');
    console.log(elm)
    console.log(elm.scrollLeft  += (item[0].clientWidth))
    elm.scrollLeft  += (item[0].clientWidth )
  }

}
