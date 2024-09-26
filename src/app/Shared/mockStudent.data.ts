import {User} from "./Models/user";




export const userList: User[] = [ //Copied from app.component.ts
  {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
  {id: 2, firstName: "Darren", lastName: "Takaki", department: "Web Dev", isAdmin: true},

  {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin: true},
  {id: 3, firstName: "diana ", lastName: "Doe", department: "Networking", isAdmin: false}
];
