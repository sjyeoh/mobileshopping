import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  carts = []
  selectedProduct = null;

  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute) { }

  getCart() {
    return this.shoppingService.products.getValue().filter((product) => {
      return product.purchaseQty > 0
    })
  }
  ngOnInit() {
    // this.carts = this.shoppingService.products.getValue()
    // .filter((product) =>{
    //   return product.purchaseQty > 0
    // })

  }

  removeCart(id){
    this.shoppingService.removeCart(id)
  }
}
