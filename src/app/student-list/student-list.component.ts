import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
// placeholder for data
  displayColumns:string[]= ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  userList: User[] = [ //Copied from app.component.ts
    {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
    {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true},
    {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
    {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
  ];

}
