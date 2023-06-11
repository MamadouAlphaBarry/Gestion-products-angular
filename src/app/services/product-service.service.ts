import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get<Array<Product>>("http://localhost:3000/products");
  }
  handleChecked(product:Product){
   return this.http.patch(`http://localhost:3000/products/${product.id}`,
    {checked:!product.checked});
    
  }
  deleteProduct(product:Product){
    return this.http.delete<Product>(`http://localhost:3000/products/${product.id}`)
  }
  editProduct(product:Product){
    return this.http.put<Product>("http://localhost:3000/products",{})
  }
}
