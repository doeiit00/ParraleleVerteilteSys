import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Item {
  id: number;
  name: string;
  quantity: number;
  checked: boolean;
}

const BASE_URL = `${environment.apiBaseUrl}/items`;

@Injectable({ providedIn: 'root' })
export class ShoppingItemService {

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(BASE_URL);
  }

  createItem(item: Item): Observable<Item> {
    console.log("Sending Create Item");
    return this.http.post<Item>(BASE_URL, item);
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`${BASE_URL}/${id}`);
  }

  updateItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${BASE_URL}/${id}`, item);
  }

  deleteItem(id: number): Observable<void> {
    console.log("Sending delete command")
    return this.http.delete<void>(`${BASE_URL}/${id}`);
  }
}
