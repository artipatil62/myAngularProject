import { Component } from '@angular/core';

@Component({
  selector: 'app-templatevalidation',
  templateUrl: './templatevalidation.component.html',
  styleUrls: ['./templatevalidation.component.css']
})
export class TemplatevalidationComponent {
public allData:any=[];









  onSubmitData(data:any){
    console.log("this is template driven form");
    console.log(data.value);
    this.allData.push(data.value);
    
  }
}
