import { Injectable } from '@angular/core';
import {User} from "../Shared/Models/user";
import {userList} from "../Shared/mockStudent.data";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})


export class StudentService {
  private apiUrl = 'api/students';
private students:User[]=userList;

  constructor(private http: HttpClient) { }

  // getting info from observables

  getStudents(): Observable <User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  //Applying CRUD operations
  //Adding basic CRUD methods
  //Create: Add USer
  addStudent(student:User) : Observable<User> {
    student.id = this.generateNewId();
    return this.http.post<User>(this.apiUrl, student);

  }

  //Update an Existing user
  updateStudent(student: User): Observable<User | undefined> {
    const url = `$this.apiUrl}/${student.id}`
    return this.http.put<User>(url, student);
  }
  //Delete: Remove a user by ID
  deleteStudent(id: number): Observable <{}>{
    const url = `$this.apiUrl}/${id}`;
    return this.http.delete(url);

  }


  getStudentById(id: number): Observable<User> {

    return this.http.get<User>(`{this.apiUrl}/${id}`);
  }

  generateNewId(): number{
    return this.students.length>0 ? Math.max(...this.students.map(student => student.id))+1: 1;
  }


}
