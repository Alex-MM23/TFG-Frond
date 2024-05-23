import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order, OrderLine } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/orderLines';
  }

  getOrderLine(): Observable<OrderLine[]> {
    return this.http.get<OrderLine[]>(`${this.myAppUrl}${this.myApiUrl}/all`);
  }

}