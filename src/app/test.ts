import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { error } from 'console';
import {catchError, retry, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Test {

  baseUrl = "https://jsonplaceholder.typicode.com/posts"
  http = inject(HttpClient)
  constructor(){

  }
  getData(){
  return this.http.get(this.baseUrl).pipe(
    catchError((error:HttpErrorResponse)=>{
              console.error('Failed to load users', error);

        return throwError(() =>
          new Error('Unable to load users')
        );
    })
  )
  }

}
