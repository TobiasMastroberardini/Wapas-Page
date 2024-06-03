import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList)

  constructor() { }

  addToCart(product: Product) {
    let item: Product | undefined = this._cartList.find((v1) => v1.name == product.name);
    if (!item) {
      this._cartList.push({ ...product });
    } else {
      item.quantity += product.quantity;
    }
    console.log(this.cartList);
    this.cartList.next(this._cartList);
  }
}
