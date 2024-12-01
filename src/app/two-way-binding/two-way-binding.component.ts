import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'two-way-binding',
  imports: [FormsModule, CommonModule],  // templateUrl: './two-way-binding.component.html',
  template: `
  <h2>Product List</h2>
  <ul>
    <li *ngFor="let product of products">
      <input [(ngModel)]="product.name" placeholder="Product Name" />
      <input [(ngModel)]="product.price" type="number" placeholder="Price" />
      <button (click)="removeProduct(product.id)">Remove</button>
    </li>
  </ul>
  <button (click)="addProduct()">Add Product</button>
`,
  styleUrl: './two-way-binding.component.scss'
})
export class TwoWayBindingComponent {
  products = [
    { id: 1, name: 'Laptop', price: 1200 },
  ];

  addProduct() {
    const newId = this.products.length + 1;
    this.products.push({ id: newId, name: '', price: 0 });
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}