import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeprac',
  templateUrl: './pipeprac.component.html',
  styleUrls: ['./pipeprac.component.css']
})
export class PipepracComponent {

  // variable for string
public sampleString:any="Hello I am learning Angular15";

//variable for Date
public date1 =new Date();

// variable for json pipe
public studData:any=[
  {name:"arti",college:"ssbt",RollNo:10},
  {name:"mona",college:"SGV",RollNo:11},
  {name:"minu",college:"Raisoni",RollNo:12},
]

//variable for slice



}
