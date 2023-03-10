import { Directive , ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appLeftscroll]'
})
export class LeftscrollDirective {

  constructor( private el : ElementRef ) { }

  @HostListener('click')
  leftFunc(){
    let elm = this.el.nativeElement.parentElement.children[2];
    let item = elm.getElementsByClassName('item');
    elm.scrollLeft  -= (item[0].clientWidth )
    console.log(elm.scrollLeft  -= (item[0].clientWidth ))
  }

}
