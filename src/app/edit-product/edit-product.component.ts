import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  addproduct: any;
  id: any;
  constructor(private fb: FormBuilder, private route: Router,
    private productservice: ProductService,
    private url: ActivatedRoute) {

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
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.productservice.singleproduct(this.id).subscribe(data => {
      this.addproduct.patchValue(data);
    })
  }

  onSubmit() {
    console.log(this.addproduct.value);
    //this.id = this.url.snapshot.params['id'];
    this.productservice.updateproduct(this.id, this.addproduct.value).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['/productlist']);
    })
  }


}
