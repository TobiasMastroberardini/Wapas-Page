import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartComponent } from "../cart/cart.component";
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ProductsListComponent, HttpClientModule, CartComponent]
})
export class HomeComponent {

}