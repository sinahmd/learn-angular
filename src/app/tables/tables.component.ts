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
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  
  tables: { [key: string]: TableRow[] } = {
    table1: [
      { name: 'airPod', price: 1, weight: 200 },
      { name: 'casio', price: 2, weight: 100 },
      { name: 'dell', price: 3, weight: 50 },
    ],
    table2: [
      { name: 'msi', price: 5, weight: 300 },
      { name: 'asus', price: 4, weight: 150 },
      { name: 'razor', price: 6, weight: 400 },
    ],
  };

  editingStates: { [key: string]: { editingIndex: number | null; editingRow: TableRow | null } } = {
    table1: { editingIndex: null, editingRow: null },
    table2: { editingIndex: null, editingRow: null },
  };

  totalPrice: number | null = null;

  startEditing(tableKey: string, index: number, row: TableRow): void {
    this.editingStates[tableKey] = {
      editingIndex: index,
      editingRow: { ...row },
    };
  }

  saveEditing(tableKey: string, row: TableRow): void {
    const editingState = this.editingStates[tableKey];
    if (editingState.editingRow) {
      Object.assign(row, editingState.editingRow);
      editingState.editingRow = null;
      editingState.editingIndex = null;
    }
  }

  cancelEditing(tableKey: string): void {
    const editingState = this.editingStates[tableKey];
    editingState.editingRow = null;
    editingState.editingIndex = null;
  }

  addRow(tableKey: string): void {
    const newRow: TableRow = { name: '', price: 0, weight: 0 };
    this.tables[tableKey].push(newRow);
    this.editingStates[tableKey] = {
      editingIndex: this.tables[tableKey].length - 1,
      editingRow: { ...newRow },
    };
  }


  deleteRow(tableKey: string, index: number): void {
    this.tables[tableKey].splice(index, 1);
  }

  sortTable(tableKey: string, sortBy: 'price' | 'weight'): void {
    const table = this.tables[tableKey];
    table.sort((a, b) => a[sortBy] - b[sortBy]);
  }

  calculateTotalPrice(): void {
    let total = 0;
    for (const tableKey in this.tables) {
      const sum = this.tables[tableKey].reduce((sum, row) => sum + row.price, 0);
      total += sum;
    }
    this.totalPrice = total;
  }
}
