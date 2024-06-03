import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formFooter } from '../interfaces/formFooter';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/formFooter'
  }

  createCategory(formFooter: formFooter): Observable<formFooter> {
    return this.http.post<formFooter>(`${this.myAppUrl}${this.myApiUrl}/`, formFooter);
  }

}