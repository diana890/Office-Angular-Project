import { Component, OnInit } from '@angular/core';
import {User} from "../Shared/Models/user";
import {NgForOf} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {StudentService} from "../Services/student.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgForOf, StudentDetailComponent, RouterLink],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
// placeholder for data
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  userList: User[] = [];

  constructor(private studentService:StudentService ) {
  }

// use the ngOnInit to initiate the instance and subscribe to the
  ngOnInit() {
    //This lifecycle hook is a good place to fetch and init our data
    this.studentService.getStudents().subscribe({
      next: (data: User[]) => this.userList = data,
      error: err => console.error("Error fetching Students", err),
      complete: () => console.log("Student data fetch complete!")
    })
  }





  // catch the click
  selectedStudent?: User;

//function to display
  selectStudent(student: User): void {
    this.selectedStudent = student;


  }
}
