import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

 private route = inject(Router)
  handleProfileNavigate(){
   this.route.navigate(['/profile',101])
  }
}
