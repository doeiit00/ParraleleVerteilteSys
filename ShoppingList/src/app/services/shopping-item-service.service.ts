import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


export interface Item {
  id: number;
  name: string;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class ShoppingItemService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<Item[]>(`${this.baseUrl}/items`);
  }

  getItem(id: number) {
    return this.http.get<Item>(`${this.baseUrl}/items/${id}`);
  }

  createOrUpdateItem(item: Omit<Item, 'id'>) {
    return this.http.post<Item>(`${this.baseUrl}/items`, item);
  }

  updateItem(id: number, item: Omit<Item, 'id'>) {
    return this.http.put<Item>(`${this.baseUrl}/items/${id}`, item);
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.baseUrl}/items/${id}`, { observe: 'response' });
  }
}
