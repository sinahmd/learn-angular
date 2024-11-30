import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root', 
})
export class ProductService {

  private productSource = new BehaviorSubject<Product>(
    new Product(1, 'Laptop', 1200) 
  );

  currentProduct$ = this.productSource.asObservable();

  /**
   * Update the current product and notify all subscribers
   * @param newProduct - Updated product object
   */
  updateProduct(newProduct: Product) {
    this.productSource.next(newProduct);
  }

  /**
   * Get the current product value without subscribing
   * @returns Current product
   */
  getCurrentProduct(): Product {
    return this.productSource.getValue();
  }
}