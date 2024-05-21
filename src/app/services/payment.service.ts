import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/orders'
  }

  // Método para enviar los datos del carrito al servidor
  payCart(order: Order): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, order);
  }
}
