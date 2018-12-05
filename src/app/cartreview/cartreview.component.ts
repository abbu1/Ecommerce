import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartreview',
  templateUrl: './cartreview.component.html',
  styleUrls: ['./cartreview.component.less']
})
export class CartreviewComponent implements OnInit {

  constructor() { }
//@Input().reviews:number;
//prod:number=300;
mySubjectVal: string;
  @Input('myInputVal') myInputVal: string;
  @Output('myOutputVal') myOutputVal = new EventEmitter();
//addNewProduct = function(product){
  
//}
  ngOnInit() {
  }

}
