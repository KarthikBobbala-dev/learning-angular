import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SettingsDirective } from './settings-directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  imports: [SettingsDirective],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings implements OnInit,AfterViewInit {

  @ViewChild('input') element!: ElementRef<HTMLInputElement>;

  constructor(){

  }
  ngOnInit(): void {

  }
ngAfterViewInit(): void {
  setTimeout(() => {
    console.log(this.element);
    this.element?.nativeElement?.focus();
  }, 5000);
}
}
