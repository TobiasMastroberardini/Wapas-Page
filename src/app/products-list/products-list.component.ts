import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './Product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products: Product[] = [{
    name: 'Producto 1',
    category: 'Categoría A',
    price: 29.99,
    stock: 100,
    image: 'https://via.placeholder.com/300',
    clearance: false,
    quantity: 1,
    description: 'Descripción del Producto 1.'
  },
  {
    name: 'Producto 2',
    category: 'Categoría B',
    price: 49.99,
    stock: 50,
    image: 'https://via.placeholder.com/300',
    clearance: true,
    quantity: 1,
    description: 'Descripción del Producto 2.'
  },
  {
    name: 'Producto 3',
    category: 'Categoría C',
    price: 19.99,
    stock: 150,
    image: 'https://via.placeholder.com/300',
    clearance: false,
    quantity: 1,
    description: 'Descripción del Producto 3.'
  }];

  constructor(private cart: ProductCartService) { }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
    product.quantity = 0;
  }

  // finalizePurchase(){}
}
