import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSettingsDirective]',
})
export class SettingsDirective {
  constructor() {}

  @HostBinding('style.backgroundColor')
  backgroundColor = 'yellow';

  @HostListener('mouseenter')
onMouseEnter() {
  console.log('Mouse entered');
}
}
