import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addproduct: any;
  constructor(private fb: FormBuilder, private route: Router,
    private productservice: ProductService) {

    this.addproduct = fb.group(
      {

        Name: ['', Validators.required],
        Location: ['', Validators.required],
        Date_of_establishment: ['', Validators.required],
        Type: ['', Validators.required],
        State: ['', Validators.required],

      })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.addproduct.value);
    this.productservice.addproduct((this.addproduct.value)).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/productlist']);
    })
  }

}
