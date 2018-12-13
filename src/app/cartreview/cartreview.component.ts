import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-cartreview',
  templateUrl: './cartreview.component.html',
  styleUrls: ['./cartreview.component.less']
})
export class CartreviewComponent implements OnInit {

  constructor(private dataservice : DataserviceService) {}
//@Input().reviews:number;
//prod:number=300;
//mySubjectVal: string;
  //@Input('myInputVal') myInputVal: string;
  //@Output('myOutputVal') myOutputVal = new EventEmitter();
//addNewProduct = function(product){
  
//}
  ngOnInit() {
    //shashwati madam code
  this.dataservice.setLoaderStatus(true);
  //shashwati madam code ends here
  }
  
}
