import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
})
export class BackgroundColorDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
  }
}
