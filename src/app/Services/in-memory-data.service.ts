import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {User} from "../Shared/Models/user";

export class InMemoryDataService implements InMemoryDbService{

   createDb(): {students: User[]} {
     const students: User[]=[
       {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
       {id: 2, firstName: "Darren", lastName: "Takaki", department: "Web Dev", isAdmin: true},

       {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin: true},
       {id: 3, firstName: "diana ", lastName: "Doe", department: "Networking", isAdmin: false}
     ];
     return {students}
   }


}
