import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  sum = 0
  products = new BehaviorSubject([
    {
      id: 1,
      title: "Product A",
      description: "Product A is Item A",
      price: 9.99,
      defQty: 1,
      purchaseQty: 0,
      img: "/assets/img/product.jpg"
    },
    {
      id: 2,
      title: "Product B",
      description: "Product B is Item B",
      price: 8.50,
      defQty: 1,
      purchaseQty: 0,
      img: "/assets/img/product.jpg"
    },
    {
      id: 3,
      title: "Product C",
      description: "Product C is Item C",
      price: 50,
      defQty: 1,
      purchaseQty: 0,
      img: "/assets/img/product.jpg"
    },
  ])

  carts = []

  constructor() { }

  minusQty(id) {
    let currentPrd = this.products.getValue()
    for (let product of currentPrd) {
      if (product.id === id && product.defQty > 0) {
        product.defQty -= 1
      }
      else if (product.id === id && product.defQty === 0) { product.defQty = 0 }
    }

  }

  plusQty(id) {
    let currentPrd = this.products.getValue()
    for (let product of currentPrd) {
      if (product.id === id && product.defQty >= 0) {
        product.defQty += 1
      }
    }

  }

  addtoCart(id) {
    let currentPrd = this.products.getValue()
    for (let product of currentPrd) {
      if (product.id === id && product.defQty > 0) {
        product.purchaseQty += product.defQty
        product.defQty = 0
      }
    }

  }

  removeCart(id) {
    let currentPrd = this.products.getValue()
    for (let product of currentPrd) {
      if (product.id === id && product.purchaseQty > 0) {
        product.purchaseQty = 0
      }
    }

  }

  calculatesum() {
    let currentPrd = this.products.getValue()
    let sum1 = 0
    for (let product of currentPrd) {
      if (product.purchaseQty > 0) {
        sum1 = (product.purchaseQty*product.price)
      }
    }
  }
  
}
