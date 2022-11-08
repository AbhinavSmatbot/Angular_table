import { Component, OnInit } from '@angular/core';
import { Product } from './produt';

@Component({
  selector: 'app-add-item-table',
  templateUrl: './add-item-table.component.html',
  styleUrls: ['./add-item-table.component.css']
})
export class AddItemTableComponent implements OnInit {
  fruit_qty11:number = 0;
  public productItem:Product[] = [
    {
    sno:101,
    name:"Samsang Watch",
    qty:1,
    price:200
   },
   {
    sno:102,
    name:"Samsang TV",
    qty:1,
    price:234
   },
   {
    sno:103,
    name:"Samsang Phone",
    qty:1,
    price:566
   },
   {
    sno:104,
    name:"Samsang Phone",
    qty:1,
    price:566
   },
   {
    sno:105,
    name:"Samsang Phone",
    qty:1,
    price:566
   },
   {
    sno:106,
    name:"Samsang Phone",
    qty:1,
    price:566
   }]
   
   encrQty(fruit:any){
   fruit.qty = fruit.qty + 1;
  }
  public decrQty(fruit:any):void{
    // this.fruit_qty11 = (this.fruit_qty11 - 1 > 0)? this.fruit_qty11 - 1 : 1;
    if(fruit.qty - 1 < 1){
      fruit.qty = 1;
      console.log('ruit_qty11->', fruit.qty)
    }else{
      fruit.qty -= 1;
      console.log('item_2->', fruit.qty);
    }
  }
  
  
  constructor() {}

  ngOnInit(): void {
  }

}
