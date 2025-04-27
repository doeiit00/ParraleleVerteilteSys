import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingItemService, Item } from '../../services/shopping-item-service.service';
import { FormsModule } from '@angular/forms';
import {AddItemPopupComponent} from '../add-item-popup/add-item-popup.component';


@Component({
  selector: 'app-shopping-list',
  imports: [CommonModule, FormsModule, AddItemPopupComponent],
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


  isPopupAddItemVisible = false;

  showPopupAddItem() {
    this.isPopupAddItemVisible = true;
  }

  hidePopupAddItem() {
    this.isPopupAddItemVisible = false;
  }
}
