import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../models/productServic.model';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  // products: Product[] = [
  //   new Product(1, 'Laptop', 1200),
  //   new Product(2, 'Phone', 800),
  //   new Product(3, 'Tablet', 600)
  // ];
  // @Input() product: Object = { name: 'Laptop', price: 1000 };
  @Input() product: string = ""

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    let db = new DatabaseConnector(123123);

    db.Connect();
    db.ConnectAgain1();
    this.messageEvent.emit("send fucking hard hi from child")
  }

//   product!: Product;

//   private _isEditable: boolean = false;  
//   // private productService: ProductService;

//   constructor(private productService: ProductService) {
//     // this.productService = productService;


//     // Subscribe to the product state
//     this.productService.currentProduct$.subscribe((product) => {
//       this.product = product;
//     });
//   }

//   get isEditable(): boolean {
//     return this._isEditable;
//   }

//   @Input() set isEditable(value: boolean) {
//     console.log(`Edit mode changed: ${value}`);
//     this._isEditable = value;
//     let db = new DatabaseConnector();

//     db.Connect();
//     db.ConnectAgain1();
//   }

//   updateName(newName: string) {
//     if (this._isEditable) {
//       const updatedProduct = { ...this.product, name: newName };
//       this.productService.updateProduct(updatedProduct);
//     } else {
//       alert('Editing is disabled!');
//     }
//   }
}

class DatabaseConnector<T> {
  private name: T;

  constructor(name: T){
    this.name = name;
  }


  public Connect(){
    // database
    console.log("Conenct " + this.name)
  }

  public ConnectAgain1(){
    console.log("Connect agian 1" + this.name)
  }
}
