import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from './product';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  pageTitle: string = "Product Details";
  productid: number = 0;
  product!: product;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //as this route parameter will not change whilst the view is loaded we get he snapshot
    //cast string to a number using Number() function
    this.productid = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.pageTitle += " " + this.productid;
    this.product = {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2021",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    };
  }

  onBack() {
    this.router.navigate(["/productlist"]);
    }

}
