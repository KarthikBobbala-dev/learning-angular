import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [],
  templateUrl: './observables.html',
  styleUrl: './observables.css',
})
export class Observables implements OnInit {

   observable = new Observable((observer)=>{
    observer.next(10),
    observer.next(20),
    observer.next(30),
    setTimeout(()=>{
      observer.next(40)
    })
    observer.complete()
   })

  constructor(){

  }
  ngOnInit(): void {
   this.observable.subscribe((res)=>{
    console.log('27***',res)
   })
  }
}
