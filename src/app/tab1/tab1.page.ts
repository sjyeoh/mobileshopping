import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  totalpurchaseamount = 0
  products = []

  constructor(
    private shoppingService: ShoppingService,
  ) {}
  
  totalsum(){
    let products = this.shoppingService.products.getValue()
    
    for (let product of products) {
      if (product.purchaseQty > 0) {
        this.totalpurchaseamount =(product.price*product.purchaseQty)
      }
    }
  }

}
