import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  Base_Url = "https://jsonplaceholder.typicode.com/todos";
  private http = inject(HttpClient);

  getTodos(){
    console.log('1')
    this.http.get(this.Base_Url).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(error)=>{
        console.log(error)
      },
      complete:()=>{
        console.log('completed')
      }
    })
  }
}
