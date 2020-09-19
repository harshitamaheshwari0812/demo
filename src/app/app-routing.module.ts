import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentRegFormComponent } from './student-reg-form/student-reg-form.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { DisplayimageComponent } from './displayimage/displayimage.component';
const routes: Routes = [
  {path:'' ,redirectTo:'dashboard', pathMatch:'full'},
{path:"dashboard",component:StudentdashboardComponent},
{path:"reg",component:StudentRegFormComponent},
{path:"update/:id",component:UpdateStudentComponent},
{path:"uploadimage",component:FileuploadComponent},
{path:'displayimage',component:DisplayimageComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
