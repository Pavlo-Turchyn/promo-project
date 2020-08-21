import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private catsUrl = 'https://api.thecatapi.com/v1/images/search';
  constructor(private http: HttpClient) {}

  getCats(amount?: number): Observable<object> {
    amount = amount || 3;
    return this.http.get(this.catsUrl, {
      params: { limit: String(amount), size: 'full' },
    });
  }
}
