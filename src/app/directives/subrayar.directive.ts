import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() appSubrayar: string;

  constructor(private element: ElementRef) { 
    console.trace('SubrayarDirective constructor');
  } // Constructor

  @HostListener('mouseenter')
  publiconMouseEnter(){
    console.trace('publiconMouseEnter');
    this.element.nativeElement.style.backgroundColor = this.appSubrayar;
    this.element.nativeElement.style.textDecoration = 'underline';
  } // publiconMouseEnter
 
  @HostListener('mouseleave')
  publiconMouseLeave(){ 
    console.trace('publiconMouseLeave');
    this.element.nativeElement.style.backgroundColor = 'teal';
    this.element.nativeElement.style.textDecoration = 'none';
  } // publiconMouseLeave

} // SubrayarDirective
