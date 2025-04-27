import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingItemService, Item } from '../../services/shopping-item-service.service';
import { FormsModule } from '@angular/forms';
import {AddItemPopupComponent} from '../add-item-popup/add-item-popup.component';
import { UpdateItemPopupComponent } from '../update-item-popup/update-item-popup.component';


@Component({
  selector: 'app-shopping-list',
  imports: [CommonModule, FormsModule, AddItemPopupComponent, UpdateItemPopupComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  private itemService = inject(ShoppingItemService);
  items: Item[] = [];
  error: string | null = null;
  selectedItem: Item | undefined;

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

  deleteItem(id: string) {
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


  handleItemUpdate(updatedItem: Item): void {
    this.itemService.updateItem(updatedItem.id, updatedItem).subscribe({
      next: (item) => {
        console.log('Item erfolgreich aktualisiert:', item);
        this.loadItems(); // Liste neu laden
        this.isUpdatePopUpVisible = false; // Popup schließen
      },
      error: (error) => {
        console.error('Fehler beim Aktualisieren:', error);
      }
    });
  }

  isUpdatePopUpVisible: boolean = false;

  openUpdatePopUp(item: Item): void {
    this.selectedItem = { ...item };
    this.isUpdatePopUpVisible = true;
  }
}
