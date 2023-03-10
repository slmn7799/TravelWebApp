import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appAnimation]'
})
export class AnimationDirective implements OnInit{

  @Input() AfterCss : string = '';
  @Input() delay : string = '';
  @Input() thresholdV : string = '';

  constructor( private el : ElementRef) { }

  observer: any;

  ngOnInit(): void{
    setTimeout(()=>{
      // console.log(+this.delay)
      this.intersectionObserver();
      this.observer.observe(this.el.nativeElement);
    }, +this.delay);
  }

  intersectionObserver(){
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: (+this.thresholdV) ? (+this.thresholdV) : 1
    }
    this.observer = new IntersectionObserver(
      (entries =>{
        // console.log(entries);
        if(entries[0].isIntersecting){
          entries[0].target.classList.add(this.AfterCss);
        }
      }), options 
    )
  }

}
