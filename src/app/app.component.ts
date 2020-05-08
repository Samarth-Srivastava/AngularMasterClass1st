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
  value1: number = null;
  value2: number =null;
  errMsg: string;

  add(){
        this.errMsg = "";
    this.signT = "+";
    this.result = this.value1 + this.value2;
    this.equalTo ="=";
  }

  product(){
        this.errMsg = "";
    this.signT = "x";
    this.result = this.value1 * this.value2;
    this.equalTo ="=";
  }

  diff(){
        this.errMsg = "";
    this.signT = "-";
    this.result = this.value1 - this.value2;
    this.equalTo ="=";
  }

  Divide(){
     this.signT = "/";
     this.equalTo ="=";
    if(this.value2 == 0){
      this.errMsg = "Denominator cannot be 0";
      this.result = null;
      return;
    }
    this.result = this.value1 / this.value2;
  }

  clear(){
    this.signT = "";
    this.result = null;
    this.equalTo = "";
    this.value1 = null;
    this.value2= null;
    this.errMsg = "";
  }

}
