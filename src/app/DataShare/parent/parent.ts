import { AfterViewInit, Component, ElementRef, OnInit, QueryList, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements AfterViewInit {

  @ViewChild(Child) child!: Child;

  @ViewChildren('id') element!:QueryList<any>;
  ngAfterViewInit(): void {
    console.log(this.child)
    this.element.first.nativeElement = "Hello World"
  }
  handleClick(){
    this.child.getTodos();
  }
}
