import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponentComponent } from './update-product-component/update-product-component.component';
import { HeaderComponent } from './header/header.component';
import { CartreviewComponent } from './cartreview/cartreview.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateProductComponentComponent,
    HeaderComponent,
    CartreviewComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	RouterModule.forRoot([
	{path:"", component:HomeComponent},
	{path:"product", component:ProductComponent},
	{path:"updateProduct/:id", component:UpdateProductComponentComponent}
	])
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
