import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


const api="http://localhost:80/tryouts/";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) { }
  saveData(data)
  {
    return this.httpclient.post(api + 'add.php',data)
  }
 getDataById(id)
 {
   return this.httpclient.get(api+'getrecordbyid.php?id='+id);
 }
  getData()
  {
    return this.httpclient.get(api +'user.php')
  }
 
  updateData(id,data)
  {
    return this.httpclient.put(api+'update.php?id='+id,data)
  }
  deleteData(id)
  {
    return this.httpclient.post(api+'delete.php',id)
  }
  saveImage(data){
    return this.httpclient.post(api + 'upload.php',data)
  }

  getImageData(){
    return this.httpclient.get(api +'showimage.php')
  }
}
