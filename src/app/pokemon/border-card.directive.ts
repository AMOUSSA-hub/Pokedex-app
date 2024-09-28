import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

private  initialColor : string = 'white';
private  defaultColor : string = 'red';
private  defaultHeight : number = 250;

  constructor( private e : ElementRef) {
    this.setHeight(this.defaultHeight)
   }

   @Input('pkmBorderCard') borderColor: string | undefined;


   @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor||this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
   }




  setHeight(height: number){
    this.e.nativeElement.style.height = `${height}px`;

  }

  setBorder(color : string){
    this.e.nativeElement.style.border = `solid 4px ${color}`;
  }
}
