import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';





@Component({
  selector: 'app-reactiveformvalid',
  templateUrl: './reactiveformvalid.component.html',
  styleUrls: ['./reactiveformvalid.component.css']
})
export class ReactiveformvalidComponent {
public myForm:any;
public submitted:boolean=false;

constructor(private fb:FormBuilder){
  this.myForm=this.fb.group({
    uname:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    pass:['',[Validators.required,Validators.minLength(3)]]
  })
}






onSubmitbtn(){
 this.submitted=true;
}



}
  












  















 
