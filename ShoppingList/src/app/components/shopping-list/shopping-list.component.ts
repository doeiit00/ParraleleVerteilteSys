import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingItemService, Item } from '../../services/shopping-item-service.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shopping-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  private itemService = inject(ShoppingItemService);
  items: Item[] = [];
  error: string | null = null;

  constructor() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => {
        this.error = 'Fehler beim Laden!';
        console.error(err);
      }
    });
  }
}
