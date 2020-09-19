import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms'
import { DataService } from '../data.service';
import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  form:FormGroup
  constructor(private dataService:DataService,private activatedroute:ActivatedRoute,private router:Router) { }

   onFileSelect(event){
     console.log(event)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
  }
  }

  uploadfile(){

      const formData = new FormData();
      formData.append('myFile', this.form.get('image').value);
      formData.append('mobile', this.form.get('stud_mobile').value);
      this.dataService.saveImage(formData).subscribe((res)=>{

        console.log("data added" , res);
             alert("data saved")
             this.router.navigateByUrl("/displayimage")
       })

  }
  ngOnInit(): void {
    this.form=new FormGroup(
      {
      stud_mobile:new FormControl(" "),
      image:new FormControl(" ")
  })
}

}
