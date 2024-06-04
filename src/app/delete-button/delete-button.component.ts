import { Component, Input } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent {
  @Input() product: any; constructor(private cart: ProductCartService) { }

  deleteFromCart(product: Product): void {
    console.log(this.product);

    this.cart.removeFromCart(product);
    product.quantity = 0;
  }
}
