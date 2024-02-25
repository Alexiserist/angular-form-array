import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formarray';
  formGroup: FormGroup;
  finalData :string = '';
  
  constructor(
    private formBuilder: FormBuilder
  ){
    this.formGroup = this.formBuilder.group({
      data: this.formBuilder.array([this.initalFormArray(),this.initalFormArray()])
    })
  }

  get formArrayData() {
    return this.formGroup.get("data") as FormArray;
  }

  initalFormArray(){
   return this.formBuilder.group({
      firstName: [null,Validators.required],
      lastName: [null,Validators.required],
   }) 
  }

  finalArrayData(){
    this.finalData = JSON.stringify(this.formGroup.get("data")?.value) ;
    console.log('Data:',this.formGroup.get("data")?.value);
    console.log('DataForm invalid:', this.formGroup.invalid);
  }
}
