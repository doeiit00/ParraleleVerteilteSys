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

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe({
      next: () => {
        this.items = this.items.filter(item => item.id !== id);
      },
      error: (err) => {
        this.error = 'Fehler beim Löschen!';
        console.error(err);
      }
    });
  }  

  createItem(item: Item){
    console.log("Try to Create Item");
    this.itemService.createOrUpdateItem(item);
  }

  updateItem(id: number, item: Item){
    console.log("Try to update Item", item);
    this.itemService.updateItem(id, item);
  }
}
