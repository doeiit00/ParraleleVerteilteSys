import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../../services/shopping-item-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-item-popup',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-item-popup.component.html',
  styleUrl: './update-item-popup.component.css'
})
export class UpdateItemPopupComponent {
  @Input() item!: Item | undefined;
  @Output() itemUpdated = new EventEmitter<Item>();
  @Output() PopUpClosed = new EventEmitter<void>();

  saveItem(){
    this.itemUpdated.emit(this.item);
  }

  closePopUp(): void {
    this.PopUpClosed.emit();
  }
}