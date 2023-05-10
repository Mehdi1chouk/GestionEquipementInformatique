import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addproduct(product: any) {
    return this.http.post('http://localhost:8080/endpoint/addproduct', product);

  }

  productlist() {
    return this.http.get('http://localhost:8080/endpoint/');
  }

  deleteProduct(id: any) {
    return this.http.delete('http://localhost:8080/endpoint/del-product/' + id);
  }

  singleproduct(id: any) {
    return this.http.get('http://localhost:8080/endpoint/product/' + id);

  }

  updateproduct(id: any, product: any) {
    return this.http.put('http://localhost:8080/endpoint/update-product/' + id, product);

  }

}
