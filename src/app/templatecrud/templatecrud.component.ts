import { Component } from '@angular/core';

@Component({
  selector: 'app-templatecrud',
  templateUrl: './templatecrud.component.html',
  styleUrls: ['./templatecrud.component.css']
})
export class TemplatecrudComponent {

  public  allData:any=[];
  public showTable:boolean=false;
  public idd:any;
  public count:number=1;

  public fn:any;
  public ln:any;

















  onSubmitData(data:any){
    // console.log(data.value);
   if(data.value.id==undefined){
        data.value.id=this.count
    this.allData.push(data.value)
    if(this.allData.length>0){
      this.showTable=true;
    }this.count++;
   }else{
    this.allData.forEach((element:any)=>{
      if(data.value.id==element.id){
        element.fname=data.value.fname
        element.lname=data.value.lname
      }
    });
      
    
   }

  }

  onDelete(data:any){
    this.allData.forEach((element:any,index:any)=>{
       if(element.id==data.id){
        this.allData.splice(index,1)
       }
    });
    if(this.allData.length==0){
      this.showTable=false;
    }
  }

  onUpdate(data:any){
    this.idd=data.id;
    this.fn=data.fname
    this.ln=data.lname

  }




}
