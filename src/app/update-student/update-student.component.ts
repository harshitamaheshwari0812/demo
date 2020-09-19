import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  // form:FormGroup
  
form=new FormGroup(
    {
    stud_name:new FormControl(" "),
    stud_email:new FormControl(" "),
    stud_age:new FormControl(" "),
    stud_isGraduate:new FormControl(" "),
    stud_branch:new FormControl(" ")

  }
  )
  student:any=[]
  id:number
  graduation_stream:string[]=["Mechnical","IT","comp Sci","E&TC"]
  
update()
{
  console.log(this.form.value);
this.dataService.updateData(this.id,this.form.value).subscribe((res)=>{
  console.log("success",res)
alert("Data updated")
this.router.navigateByUrl("/")
})
}
  constructor(private dataService:DataService,private activatedroute:ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>
    {
      this.id=param["id"]
      this.dataService.getDataById(this.id).subscribe((data)=>
      {
        this.student=data
        console.log(data)
        this.form=new FormGroup(
          {
          stud_name:new FormControl(data[0]['student_name']),
          stud_email:new FormControl(data[0]['student_email']),
          stud_age:new FormControl(data[0]['student_age']),
          stud_isGraduate:new FormControl(data[0]['student_isGraduate']),
          stud_branch:new FormControl(data[0]['student_branch'])
        })
      })
    })
  }

}
