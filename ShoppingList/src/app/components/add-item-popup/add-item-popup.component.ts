import {Component, EventEmitter, inject, Output} from '@angular/core';
import {Item, ShoppingItemService} from '../../services/shopping-item-service.service';
import {FormsModule} from '@angular/forms';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-add-item-popup',
  imports: [
    FormsModule
  ],
  templateUrl: './add-item-popup.component.html',
  styleUrl: './add-item-popup.component.css'
})
export class AddItemPopupComponent {
  private itemService = inject(ShoppingItemService);
  private shoppingList = inject(ShoppingListComponent);
  text: string = '';
  items: Item[] = [];
  errorMessage: string = '';
  quantity: number = 1;

  constructor() {
    this.loadList();
  }

  loadList() {
    this.itemService.getItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
    this.errorMessage = '';
  }

  createOrUpdateItem() {
    this.itemService.getItems().subscribe({
      next: (items) => {
        const existingItem = items.find((item) => item.name === this.text);
        if (existingItem) {
          this.errorMessage = `Item "${this.text}" already exists`;
        } else if (this.text.trim() === '') {
          this.errorMessage = 'Please enter a valid item name';
        }
        else {
          this.createItem({id: Math.max(0, ...items.map(item => +item.id)) + 1, name: this.text, quantity: this.quantity, checked: false});
          this.closePopup();
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  createItem(item: Item) {
    console.log("Try to Create Item");
    this.itemService.createItem(item).subscribe({
      next: (response) => {
        console.log("Item created successfully:", response);
        this.shoppingList.loadItems(); // Reload items to reflect the new entry
      },
      error: (err) => {
        console.error("Error creating item:", err);
      }
    });
  }
}
