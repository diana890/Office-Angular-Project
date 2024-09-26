import { Injectable } from '@angular/core';
import {User} from "../Shared/Models/user";
import {userList} from "../Shared/mockStudent.data";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class StudentService {
private students:User[]=userList;

  constructor() { }

  // getting info from observables

  getStudent(): Observable <User[]>{
    return of (userList);
  }


}
