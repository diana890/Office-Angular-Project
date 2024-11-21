import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {StudentListComponent} from "./app/student-list/student-list.component";
import {StudentDetailComponent} from "./app/student-detail/student-detail.component";
import {ModifyStudentComponent} from "./app/modify-student/modify-student.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {provideHttpClient} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";
import {importProvidersFrom} from "@angular/core";


// add path for two components that we have already
const routes:Routes=[
  {path: 'students', component:StudentListComponent},
  {path: 'students/:id', component: StudentDetailComponent},
  {path: 'modify-student', component: ModifyStudentComponent},
  {path: '**', component: PageNotFoundComponent}
]



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay : 1000}))
  ]
}).catch((err) => console.error(err));

