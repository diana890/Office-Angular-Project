import {Component, OnInit} from '@angular/core';
import {User} from "../Shared/Models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../Services/student.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DisableButtonDirective} from "../directives/disable-button.directive";
import {AutoFocusDirective} from "../directives/auto-focus.directive";

@Component({
  selector: 'app-modify-student',
  standalone: true,
  imports: [ReactiveFormsModule, DisableButtonDirective, AutoFocusDirective],
  templateUrl: './modify-student.component.html',
  styleUrl: './modify-student.component.css'
})
export class ModifyStudentComponent implements OnInit{

  studentForm: FormGroup;
  student: User | undefined;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private studentService:StudentService,
               private fb:FormBuilder
               ) {
    this.studentForm= this.fb.group({
      id: [studentService.generateNewId()],
      firstName: ['',Validators.required],
      lastName: ['', Validators.required],
      department: [''],
      isAdmin: [false]
    });

  }


  // Fetch and inject data

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.studentService.getStudentById(+id).subscribe({
        next:student => {
          if(student){
            this.studentForm.patchValue(student);
          }
        },

      })
    }
  }

  onSubmit(){
    if(this.studentForm.valid) {
      const student: User = this.studentForm.value;
      if (student.id) {
        this.studentService.updateStudent(student).subscribe(()=> this.router.navigate(['/students']));
      } else {
        student.id = this.studentService.generateNewId();
        this.studentService.addStudent(student).subscribe(()=> this.router.navigate(['students']));
      }

    }
  }

  onDelete(){
    const id = this.studentForm.value.id;
    if(id){
      this.studentService.deleteStudent(id).subscribe(() =>this.router.navigate(['/students'] ));

    }

  }

   navigateToStudentList(){
    this.router.navigate(['/students'])

   }




}
