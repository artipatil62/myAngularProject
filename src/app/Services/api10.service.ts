
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api10Service {

  constructor(private http:HttpClient) {

   }

getApiData(){
  return this.http.get("http://localhost:3000/posts");
}

postApiData(data:any){
  return this.http.post("http://localhost:3000/posts",data);
}

deleteApiData(id:any){
 return this.http.delete("http://localhost:3000/posts/"+ id);
}

updateApiData(data:any){
  return this.http.put("http://localhost:3000/posts/" + data.id ,data);

}



}
