import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:Array<Product>=[];
  updatedProduct!:Product;
  constructor(private productService:ProductServiceService) { }
  ngOnInit(): void {
    
    this.productService.getAllProducts()
    .subscribe({
        next:data=>{this.products=data},
        error:error=>{
          console.log(error.message);
        }
    });
 
  }
  
  handleChecked(product:Product){
   this.productService.handleChecked(product).subscribe({
      next:updatedProduct=>{
        product.checked=!product.checked
      }
    })
  }
  handleDeleteProduct(product:Product){
    if(confirm("Etes Vous Sure de Vouloire Supprimer  ce Produit"))
  this.productService.deleteProduct(product).subscribe({
    next:data=>{
      this.products=this.products.filter(p=>p.id!=product.id)
    }
  });
  }
  handleEditProduct(p:Product){

  }
}
