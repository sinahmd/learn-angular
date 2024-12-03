import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './tables/tables.component';

@Component({
  selector: 'app-root',
  imports: [ FormsModule, TablesComponent],
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
