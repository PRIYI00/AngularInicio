import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  @Input() appHello: String;

  constructor(private element: ElementRef) { 
    console.trace('HelloDirective constructor');
  } // Constructor

  @HostListener('mouseenter')
  publiconMouseEnter(){
    console.trace('publiconMouseEnter');
    this.element.nativeElement.style.backgroundColor = this.appHello;
  } // publiconMouseEnter
 
  @HostListener('mouseleave')
  publiconMouseLeave(){ 
    console.trace('publiconMouseLeave');
    this.element.nativeElement.style.backgroundColor = 'black';
  } // publiconMouseLeave

} // HelloDirective
