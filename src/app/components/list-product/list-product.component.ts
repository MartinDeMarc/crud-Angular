import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  listProduct: Product[] = [
    {
      id:1,
      name: 'Coca cola',
      description: 'Bebida con Azucar',
      price: 10,
      stock: 200,
    },
    {
      id: 2,
      name: 'Quilmes',
      description: 'Bebida con Alcohol',
      price: 12,
      stock: 150,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
