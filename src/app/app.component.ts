import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  signT: string;
  equalTo: string;
  result: number;
  value1: number = 0;
  value2: number =0;
  errMsg: string;

  add(){
    this.signT = "+";
    this.result = this.value1 + this.value2;
    this.equalTo ="=";
  }

  product(){
    this.signT = "x";
    this.result = this.value1 * this.value2;
    this.equalTo ="=";
  }

  diff(){
    this.signT = "-";
    this.result = this.value1 - this.value2;
    this.equalTo ="=";
  }

  Divide(){
    if(this.value2 == 0){
      this.errMsg = "Denominator cannot be 0";
      
      return;
    }

    this.signT = "/";
    this.result = this.value1 + this.value2;
    this.equalTo ="=";
  }

  clear(){
    this.signT = "";
    this.result = null;
    this.equalTo = "";
    this.value1 = 0;
    this.value2= 0;
    this.errMsg = "";
  }

}
