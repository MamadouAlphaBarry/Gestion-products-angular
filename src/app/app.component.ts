import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-product';
actions:Array<any>=[
  {title:"Products",route:"products",icon:""},
  {title:"Home", route:"home",icon:""},
  {title:"New Product",route:"newProduct",icon:""}
]
products:Array<any>=[];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
    this.http.get<Array<any>>("http://localhost:3000/products")
    .subscribe({
        next:data=>this.products
    });
  }
  currentAction:any;
  setCurrentProduct(action:any){
    this.currentAction=action;
  }
}
