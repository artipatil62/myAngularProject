

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  public url:any="http://localhost:3000/posts"
 constructor(private http:HttpClient){

 }


getAPIData(){
  return this.http.get("http://localhost:3000/posts");
}

postAPIData(data:any){
  return this.http.post("http://localhost:3000/posts",data);
}

// deleteAPIData(){
//   return this.http.delete("http://localhost:3000/posts",)
// }
}
