import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models/product';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URI = environment.baseURL + "/products";
  BASE_IMG_URI = environment.baseURL + "/uploads";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.BASE_URI);
  }

  getImage(srcImg: string): Observable<any>{
    return this.http.get(this.BASE_IMG_URI + '\\' + srcImg, { responseType: 'blob' });
  }

}
