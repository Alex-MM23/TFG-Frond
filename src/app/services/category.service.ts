import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/categories'
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.myAppUrl}${this.myApiUrl}/create`, category);
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.myAppUrl}${this.myApiUrl}/all`);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/all/${id}`);
  }

}
