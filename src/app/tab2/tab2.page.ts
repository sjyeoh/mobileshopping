import { Component,OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  products = []
  selectedProduct = null;

  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    this.shoppingService.products.subscribe(products => {
      this.products = products
    })
    const selectedProductIdx = this.route.snapshot.params.id
    this.selectedProduct = this.shoppingService.products.getValue()
                        .filter((product) => {
                          return product.id === parseInt(selectedProductIdx)
                        })[0]
  }
  
  minusQty(id){
    this.shoppingService.minusQty(id)
  }

  plusQty(id){
    this.shoppingService.plusQty(id)
  }

  addtoCart(id){
    this.shoppingService.addtoCart(id)
  }

}
