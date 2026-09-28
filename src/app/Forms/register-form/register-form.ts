import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm implements OnInit {

  registerForm!:FormGroup

  ngOnInit(): void {
  this.registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    workEmail: new FormControl(''),
    companyName: new FormControl(''),
    password: new FormControl(''),
    isChecked : new FormControl(false)
  })
  }

handleAccountSubmit(): void {
  console.log(this.registerForm.value);
}

}
