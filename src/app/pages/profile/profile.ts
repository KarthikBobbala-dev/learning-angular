import { Component,inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-profile',
  imports: [MatTableModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

  private router = inject(ActivatedRoute);
  id = signal<any>(null);
  dataSource = new MatTableDataSource<any>([]);
  displayedCoumns = ['name','age','email','phone','course','year','city','status']
  students = signal<any[]>([
    {
      id: 1,
      name: 'John Doe',
      age: 20,
      email: 'john.doe@example.com',
      phone: '9876543210',
      course: 'Computer Science',
      year: 2,
      city: 'Hyderabad',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 21,
      email: 'jane.doe@example.com',
      phone: '9876543211',
      course: 'Information Technology',
      year: 3,
      city: 'Bangalore',
      status: 'Active'
    },
    {
      id: 3,
      name: 'John Smith',
      age: 22,
      email: 'john.smith@example.com',
      phone: '9876543212',
      course: 'Electronics',
      year: 4,
      city: 'Chennai',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Jane Smith',
      age: 23,
      email: 'jane.smith@example.com',
      phone: '9876543213',
      course: 'Mechanical',
      year: 4,
      city: 'Pune',
      status: 'Graduated'
    },
    {
      id: 5,
      name: 'John Doe',
      age: 20,
      email: 'john.doe2@example.com',
      phone: '9876543214',
      course: 'Civil',
      year: 1,
      city: 'Mumbai',
      status: 'Active'
    },
    {
      id: 6,
      name: 'Jane Doe',
      age: 21,
      email: 'jane.doe2@example.com',
      phone: '9876543215',
      course: 'Computer Science',
      year: 2,
      city: 'Delhi',
      status: 'Inactive'
    }
  ]);
  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      this.id.set(params['id'])
    });
    this.getStudentDetails();
  }

  getStudentDetails(){
    this.dataSource = new MatTableDataSource(this.students());
  }

}
