import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private myAppUrl = 'http://localhost:3000/';
  private myApiUrl = 'api/categories/';

  constructor(private http: HttpClient) { }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.myAppUrl}${this.myApiUrl}create`, category);
  }
}
