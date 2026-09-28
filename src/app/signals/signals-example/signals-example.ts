import { Component, computed, effect, ElementRef, OnInit, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signals-example',
  imports: [],
  templateUrl: './signals-example.html',
  styleUrl: './signals-example.css',
})
export class SignalsExample implements OnInit {
  private prices = signal<number[]>([]);
  @ViewChild('userName')userName!:ElementRef
  itemCount = computed(() => this.prices().length);
  // total = computed(() => this.prices().reduce((a, b) => a + b, 0).toFixed(2));

  // total = computed(()=> {
  //   let total = 0;
  //   for (const price of this.prices()){
  //     total += price
  //   }
  //   for(let i=0;i < this.prices().length;i++){
  //        total += i
  //   }
  //   return total.toFixed(2);
  // })
  constructor(){
    effect(()=>{
      console.log(27, this.prices())
    })
  }
  ngOnInit(): void {
    console.log(this.prices())
    this.userName.nativeElement.focus();
  }

  addItem(price: number) {
    this.prices.update(p => [...p, price,100]);
  }
}
