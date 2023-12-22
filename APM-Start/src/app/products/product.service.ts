import { Injectable } from "@angular/core";
import { product } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    getProducts() :product[] {
        return [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2019",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "assets/images/leaf_rake.png"
              },
              {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2019",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "assets/images/garden_cart.png"
              },
              {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2020",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "assets/images/xbox-controller.png"
              },
              {
                "productId": 14,
                "productName": "Wheelbarrow",
                "productCode": "GMG-0001",
                "releaseDate": "February 16, 1974",
                "description": "Metal Wheelbarrow",
                "price": 65.00,
                "starRating": 2.1,
                "imageUrl": "assets/images/garden_cart.png"
              }
        ];
    }
}