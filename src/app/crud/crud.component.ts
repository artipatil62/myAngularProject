import { Component } from '@angular/core';
import { ApiservicesService } from '../Services/apiservices.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {



  public courses:any=["Engg.","Bsc","Bcom","MCA","MSC","PHD"];
  
 

  public allStudentData:any;
  constructor(private api:ApiservicesService){
     this.getServiceData();
  }

  onSubmitData(data5:any){
    this.PostServiceData(data5);
}


  getServiceData(){
    this.api.getAPIData().subscribe((res:any)=>{
      this.allStudentData=res;
      console.log(this.allStudentData);

    })
  
  }

  PostServiceData(data1:any){
    this.api.postAPIData(data1).subscribe(
      (res:any)=>{console.log(res) },
      (err:any)=>{console.log(err) }
      )
  }


}
