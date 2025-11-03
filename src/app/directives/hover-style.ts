import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]',
  standalone: true,
})
export class HoverStyle {
  @Input() hoverShadow: string = '2px 2px 10px rgba(0, 0, 0, 0.3)';

  constructor(private el: ElementRef, private rend: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.rend.setStyle(this.el.nativeElement, 'box-shadow', this.hoverShadow);
    this.rend.setStyle(this.el.nativeElement, 'transition', 'all 0.3s');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.rend.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}
