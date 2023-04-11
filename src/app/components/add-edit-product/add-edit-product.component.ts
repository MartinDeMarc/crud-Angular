import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    });
  }

  ngOnInit() {}

  addProduct() {
    // console.log(this.form);

    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,

    };

    console.log(product);
    this.toastr.success('El producto fue registrado con exito :)', 'Producto Registrado!');
this.router.navigate(['/'])
  }
}
