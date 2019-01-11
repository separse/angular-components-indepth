import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color;
  constructor(private element: ElementRef) {
    console.log(element);
    element.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseenter') addHighlight(){
    this.element.nativeElement.style.backgroundColor = 'lightblue';
   }

   @HostListener('mouseleave') removeHighlight(){
    this.element.nativeElement.style.backgroundColor = this.color;
   }


}
