import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  products: Product[] = [];

  constructor(private cart: ProductCartService) { }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
    product.quantity = 0;
  }

  // finalizePurchase(){}

}
