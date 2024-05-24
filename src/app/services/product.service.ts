import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { ProductCarrito } from '../interfaces/productCarrito';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/products'
  }

  getProducts(): Observable<Product[]> {
    /*  const token = localStorage.getItem('token')
     const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`) */
    /*     return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers } ) */
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  createProduct(product: ProductCarrito): Observable<ProductCarrito> {
    return this.http.post<ProductCarrito>(`${this.myAppUrl}${this.myApiUrl}/create`, product);
  }

  //lista carrito
  private myList: Product[] = [];

  //carrito observable
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();


  //añado producto al carrito
  addProduct(product: Product) {

    // debugger;
    if (this.myList.length === 0) {
      product.cantidad = 1;
      this.myList.push(product);
      //emito la lista para los que estén escuchando
      this.myCart.next(this.myList);

    } else {
      const productMod = this.myList.find((element) => {
        return element.id === product.id
      })
      if (productMod) {
        productMod.cantidad = productMod.cantidad + 1;
        this.myCart.next(this.myList);
      } else {
        product.cantidad = 1;
        this.myList.push(product);
        //ojo hay que emitir la lista!!
        this.myCart.next(this.myList);
      }

    }
  }

  findProductById(id: number) {
    return this.myList.find((element) => {
      return element.id === id
    })

  }

  updateUnits(operation: string, id: number): void {
    const product = this.findProductById(id);
    if (product) {
      if (operation === 'minus' && product.cantidad > 0) {
        product.cantidad -= 1;
      }
      if (operation === 'add') {
        product.cantidad += 1;
      }
      if (product.cantidad === 0) {
        this.deleteProduct(id);
      }
      this.myCart.next(this.myList);
    }
  }

  deleteProduct(id: number) {

    this.myList = this.myList.filter((product) => {
      return product.id != id
    })
    this.myCart.next(this.myList);


  }
  totalCart() {
    const total = this.myList.reduce(function (acc, product) { return acc + (product.cantidad * product.price); }, 0)
    return total
  }

  getCartItems(): Product[] {
    return this.myList;
  }

  clearCart(): void {
    this.myList = [];
    this.myCart.next(this.myList);
  }

  getCartSnapshot(): Product[] {
    return [...this.myList]; // Devolver una copia del carrito actual
  }

}
