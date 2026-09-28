import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';


interface DynamicField {
  name: string,
  label: string,
  type: 'text' | 'number' | 'select' | 'date',
  required: boolean,
  options?: string[]
}
@Component({
  selector: 'app-insurance',
  imports: [ReactiveFormsModule],
  templateUrl: './insurance.html',
  styleUrl: './insurance.css',
})
export class Insurance implements OnInit {
  insuranceForm!: FormGroup;

  fields: DynamicField[] = [
    {
      name: 'CustomerName',
      label: 'Customer Name',
      type: 'text',
      required: true
    },
    {
      name: 'age',
      label: 'Age',
      type: 'text',
      required: true
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'select',
      required: true,
      options: ['Male', 'Female', 'Others']
    },
    {
      name: 'insuranceType',
      label: 'Insurance Type',
      type: 'select',
      required: true,
      options: ['Health', 'Vechile', 'Life']
    },
    {
      name: 'coverageAmount',
      label: 'Coverage Amount',
      type: 'number',
      required: true
    }
  ];
  fb = inject(FormBuilder);

  constructor() {
    this.createForm();
  }
  createForm() {
    const controls: any = {};
    const validators: any = [];
    this.fields.forEach((field) => {
      if (field.required) {
        validators.push(Validators.required)
      }
      controls[field.name] = ['', validators]
    });
    this.insuranceForm = this.fb.group(controls);
  }
  ngOnInit(): void {
    console.log(72, this.insuranceForm)
  }
  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.insuranceForm.value)
  }
}
