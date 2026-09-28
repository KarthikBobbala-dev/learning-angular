import { Component, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-jobapply',
  imports: [ReactiveFormsModule,MatTabsModule],
  templateUrl: './jobapply.html',
  styleUrl: './jobapply.css',
})
export class Jobapply {
  positions = signal([
    {id:1,value:'frontenddeveloper',name:'Front End Developer'},
    {id:2,value:'backenddeveloper',name:'Back End Developer'},
    {id:3,value:'aiengineer',name:'AI Engineer'}
  ]);
  skillExamples: Record<string, string> = {
    frontenddeveloper: 'Angular',
    backenddeveloper: 'Node.js',
    aiengineer: 'Python'
  };
  private readonly fb = inject(FormBuilder);

  applicationForm: FormGroup = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    address:['',Validators.required],
    position:['frontenddeveloper',Validators.required],
    skills: this.fb.array([this.fb.control('', Validators.required)])
  });

  get skills(): FormArray {
    return this.applicationForm.get('skills') as FormArray;
  }

  get selectedPosition(): string {
    return this.applicationForm.get('position')?.value ?? 'frontenddeveloper';
  }

  onPositionChange(): void {
    this.skills.clear();
    this.addSkill();
  }

  addSkill(): void {
    this.skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(index: number): void {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }

  handleFormSubmit(){
    if (this.applicationForm.invalid) {
      this.applicationForm.markAllAsTouched();
      return;
    }

    console.log(this.applicationForm.value);
  }
}
