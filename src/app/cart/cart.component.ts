import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [CommonModule, HttpClientModule, ProductCardComponent, DeleteButtonComponent]
})
export class CartComponent {
  cartList!: Observable<Product[]>;
  product: any;

  constructor(private cart: ProductCartService) {
    this.cartList = cart.cartList.asObservable();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
