import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private El:ElementRef) {
    El.nativeElement.style.color='green';
   }


}
