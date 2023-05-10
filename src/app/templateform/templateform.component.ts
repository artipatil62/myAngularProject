import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
  
  public courses:any=["Engg","Bsc","MSC","MCOM","BCOM"];
 public studentData:any=[];










  onSubmitData(data:any){
    console.log("this is template driven form");
    console.log(data.value);
    this.studentData.push(data.value);



  }
}
