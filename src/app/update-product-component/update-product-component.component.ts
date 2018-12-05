import { Component, OnInit } from '@angular/core';
import { Headers, Response, Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-update-product-component',
  templateUrl: './update-product-component.component.html',
  styleUrls: ['./update-product-component.component.less']
})
export class UpdateProductComponentComponent implements OnInit {
id:number;
	products=[];
	data:object={};
	productObj:object={};
	private headers = new Headers({'Content-Type':'application/json'});
  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }
  
updateNewProduct(product){
	this.productObj = {
		"name":product.name,
		"color":product.color
	};
	const url =`${"http://localhost:3000/products"}/${this.id}`;
this.http.put(url, JSON.stringify(this.productObj), {headers: this.headers}).toPromise()
.then(() => {
	this.router.navigate(['/']);
});
}
  ngOnInit() {
	  this.route.params.subscribe(params =>{
		  this.id =+params['id'];
	  });
	  this.http.get("http://localhost:3000/products").subscribe(
	  (res:Response) =>{
		  this.products = res.json();
		  for(var i=0; i<this.products.length; i++){
			  if(parseInt(this.products[i].id) === this.id){
				  //this.exist = true;
			  this.data = this.products[i];
			  break;
			  }
			  else {
            //this.exist = false;
          }
		  }
	  }
	  )
  }

}
