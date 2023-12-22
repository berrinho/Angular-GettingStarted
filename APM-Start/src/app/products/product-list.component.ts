
import { Component, OnInit } from '@angular/core';
import {product} from './product';
import { ProductService } from './product.service';

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class productListComponent implements OnInit{

    
    pageTitle: string = 'Product List';
    imageWidth: number=50;
    imageMargin: number=2;
    showImage: boolean=false;
    private _listFilter: string = '';
    filteredProducts: product[] = [];
    products: product[] = [];

    constructor(private productService: ProductService){};

    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log("list filter = " + this._listFilter);
        this.filteredProducts = this.performFilter(value); 
    }


    performFilter(filterBy: string): product[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: product) => 
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    ngOnInit(): void {
        console.log("in on init");
        this.products = this.productService.getProducts();
        this.filteredProducts = this.productService.getProducts();
        this.listFilter = '';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    changeTitle(title:string): void {
        this.pageTitle = title;
    }
}