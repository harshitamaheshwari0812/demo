import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.component.html',
  styleUrls: ['./displayimage.component.css']
})
export class DisplayimageComponent implements OnInit {
  upload:any=[]
  imageDirectoryUrl:any="http://localhost/tryouts/uploads/"
  getImage()
  {
    this.dataService.getImageData().subscribe((res)=>{
this.upload=res
    })
  }
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getImage()
  }


}
