import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TableRow {
  name: string;
  price: number;
  weight: number;
}

@Component({
  selector: 'tables',
  imports: [CommonModule, FormsModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {
  table1: TableRow[] = [
    { name: 'airPod', price: 1, weight: 200 },
    { name: 'casio', price: 2, weight: 100 },
    { name: 'dell', price: 3, weight: 50 },
  ];

  table2: TableRow[] = [
    { name: 'msi', price: 5, weight: 300 },
    { name: 'asus', price: 4, weight: 150 },
    { name: 'razor', price: 6, weight: 400 },
  ];

  totalPrice: number | null = null;


  addRow(table: TableRow[]): void {
    table.push({ name: '', price: 0, weight: 0 });
  }


  deleteRow(table: TableRow[], index: number): void {
    table.splice(index, 1);
  }

  sortTable(table: TableRow[]): void {
    if (table === this.table1) {
      this.table1.sort((a, b) => a.weight - b.weight);
    } else if (table === this.table2) {
      this.table2.sort((a, b) => a.price - b.price);
    }
  }
 
  calculateTotalPrice(): void {
    const sumTable1 = this.table1.reduce((sum, row) => sum + row.price, 0);
    const sumTable2 = this.table2.reduce((sum, row) => sum + row.price, 0);
    // return sumTable1 + sumTable2;
    this.totalPrice = sumTable1 + sumTable2
  }
}
