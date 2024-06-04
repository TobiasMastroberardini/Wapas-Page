import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddToCartButtonComponent } from '../add-to-cart-button/add-to-cart-button.component';
import { CartComponent } from '../cart/cart.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductDataService } from '../product-data.service';
import { Product } from './Product';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, DatePipe, ProductCardComponent, FormsModule, HttpClientModule, CartComponent, AddToCartButtonComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products: Product[] = [];
  cart: any;

  constructor(
    private productsDataService: ProductDataService
  ) { }

  ngOnInit(): void {
    this.productsDataService.getAll().subscribe(products => this.products = products);
  }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  // finalizePurchase(){}
}
