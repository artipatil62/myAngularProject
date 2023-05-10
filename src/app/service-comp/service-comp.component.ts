import { Component } from '@angular/core';
import { Api10Service } from '../Services/api10.service';

@Component({
  selector: 'app-service-comp',
  templateUrl: './service-comp.component.html',
  styleUrls: ['./service-comp.component.css']
})
export class ServiceCompComponent {
 
  public courses:any=["Engg","Bsc","MSC","MCOM","BCOM"];
 public studentData:any=[];

 constructor(private api:Api10Service){
   this.getData();

   
   
 }










  onSubmitbtn(data:any){
   this.api.postApiData(data.value).subscribe((res:any)=>{
        console.log(res);
   })
   this.getData();
  }

  getData(){
    this.api.getApiData().subscribe((res:any)=>{
      this.studentData=res;
    })
  }

  onDeletebtn(data:any){
    this.api.deleteApiData(data).subscribe((res:any)=>{
      console.log(res);
    })
    this.getData();
  }

  onUpdatebtn(data:any){

  }
}
