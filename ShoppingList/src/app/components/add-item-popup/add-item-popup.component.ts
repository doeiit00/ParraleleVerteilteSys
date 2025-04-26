import {Component, EventEmitter, inject, Output} from '@angular/core';
import {Item, ShoppingItemService} from '../../services/shopping-item-service.service';
import {FormsModule} from '@angular/forms';

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
  text: string = '';
  items: Item[] = [];

  constructor() {
    this.loadItems();
  }

  loadItems() {
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
  }

  createOrUpdateItem() {
    this.itemService.getItems().subscribe({
      next: (items) => {
        const existingItem = items.find((item) => item.name === this.text);
        if (existingItem) {
          this.updateItem(existingItem.id, { ...existingItem, name: this.text });
        } else {
          this.createItem({ id: 0, name: this.text, quantity: 1, checked: false });
        }
        this.closePopup()
      },
      error: (err) => {
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
