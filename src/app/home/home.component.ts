import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsListComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
