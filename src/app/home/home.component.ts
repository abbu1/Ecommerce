import { Component, OnInit } from '@angular/core';
import { Headers, Response, Http} from '@angular/http';
import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

	constructor(private http: Http) { }
	readonly ROOT_url	= "https://jsonplaceholder.typicode.com";
	posts:any;
  id:number;
  private headers = new Headers({'Content-Type':'application/json'});
products = [];
  fetcData = function(){
	  this.http.get("http://localhost:3000/products").subscribe(
	  (res:Response) =>{
		  this.products = res.json();
	  }
	  )
  }
  
  deletProduct = function(id){
	  if(confirm("Are You Sure?")){
	  const url =`${"http://localhost:3000/products"}/${id}`;
	  return this.http.delete(url, {headers: this.headers}).toPromise()
	  .then(() => {
		  this.fetcData();
	  })
	  }
	}
	productObj = {};
	prod:number=0;
	addNewProduct = function(product){
		this.productObj={
		"name":product.name,
		"color":product.color,
		"price":product.price
		}
		this.http.post("http://localhost:3000/products/",this.productObj).subscribe((res:Response) => {
		//document.write(res);
		//this.isAdded=true;

		})
	}
  
  ngOnInit() {
		isAdded:false;
	  this.fetcData();
  }
}
