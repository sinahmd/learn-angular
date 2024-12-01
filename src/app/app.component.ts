import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, FormsModule, TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-ang';

  receivedMessage: string = ''
  
  receiveMessage(receivedMessage:string) {
    this.receivedMessage = receivedMessage
  }
}
