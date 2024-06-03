import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList!: Observable<Product[]>;
  product: any;

  constructor(private cart: ProductCartService) {
    this.cartList = this.cartList.asObservable();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
