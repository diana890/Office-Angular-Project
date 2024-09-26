import { Component } from '@angular/core';
import {User} from "../Shared/Models/user";
import {NgForOf} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgForOf, StudentDetailComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
// placeholder for data
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  userList: User[] = [];

  // catch the click
  selectedStudent?: User;

//function to display
  selectStudent(student: User): void {
    this.selectedStudent = student;


  }
}
