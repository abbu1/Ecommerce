import { Component, OnInit } from '@angular/core';
import { Headers, Response, Http} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  constructor(private http: Http) { }
  conformationMsg:string = "New Product Added Successfully";
  isAdded:boolean = false;
	productObj = {};
	addNewProduct = function(product){
		this.productObj={
		"name":product.name,
		"color":product.color
		}
		this.http.post("http://localhost:3000/products/",this.productObj).subscribe((res:Response) => {
		//document.write(res);
		//this.isAdded=true;
		})
	}
  ngOnInit() {
	  
  }

}
