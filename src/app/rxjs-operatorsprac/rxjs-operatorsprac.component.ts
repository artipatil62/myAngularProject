import { Component } from '@angular/core';
import { filter, from, map, of } from 'rxjs';


@Component({
  selector: 'app-rxjs-operatorsprac',
  templateUrl: './rxjs-operatorsprac.component.html',
  styleUrls: ['./rxjs-operatorsprac.component.css']
})
export class RxjsOperatorspracComponent {
public array:any=[10,20,30,40,50];
public obser:any;
constructor(){
  this.obser=from(this.array);
  this.obser.pipe(
  map((x:any)=>x+2),
  filter((z:any)=>z>20),
  ).subscribe(
    ((res:any)=>{
      console.log(res);
    }),
    ((err:any)=>{
      console.log(err);
    })
  )
  
  
}


 




}


