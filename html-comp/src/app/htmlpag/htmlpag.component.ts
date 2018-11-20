import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmlpag',
  templateUrl: './htmlpag.component.html',
  styleUrls: ['./htmlpag.component.css']
})
export class HtmlpagComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
   
  }
  compileCode() {
    var x = (<HTMLInputElement>document.getElementById("TextareaId")).value;
    // document.getElementById("ans").innerHTML = x;
    if (x == "")
	    {alert("kindly enter your code to compile");}
	  else{
	    var myWindow = window.open();
	    myWindow.document.write(x);
	  }
      // var myWindow = window.open();
	    // myWindow.document.write(x);
  }

  eraseText() {
	  if (confirm("The code you have entered will be cleared")) {
        (<HTMLInputElement>document.getElementById("TextareaId")).value = "";
    } 
	
}
}
