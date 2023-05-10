import { Component, OnInit } from '@angular/core';
//import { Router } from 'express';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: any;
  constructor(private route: Router, private productservice: ProductService, public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.loadProduct();
  }

  goToAddproduct() {
    this.route.navigate(['/addproduct']);
  }

  loadProduct() {
    this.productservice.productlist().subscribe((data: any) => {
      //console.log(data);
      this.products = data;
    });
  }

  delProduct(datas: any) {

    if (confirm('Are you sure you want to delete this product?')) {



      this.productservice.deleteProduct(datas._id).subscribe(data => {
        console.log(data);
        this.products = this.products.filter((u: any) => u !== datas)
      })

    }

  }
}
