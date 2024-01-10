
import { Component, OnDestroy, OnInit } from '@angular/core';
import {product} from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class productListComponent implements OnInit, OnDestroy{

    
    pageTitle: string = 'Product List';
    imageWidth: number=50;
    imageMargin: number=2;
    showImage: boolean=false;
    private _listFilter: string = '';
    filteredProducts: product[] = [];
    products: product[] = [];
    err: string='';
    sub!: Subscription;

    constructor(private productService: ProductService){};

    ngOnInit(): void {
        console.log("in on init");
        this.sub = this.productService.getProducts().subscribe({ 
            next: products => { this.products=products;
                this.filteredProducts = this.products;},
            error: err => this.err =err }
        );

        //nb this does not work because at this stage the asynch call hasn't been returned
        //we move it up into the method passed to the subscribe function so that it is actioned when
        //the asynch call returns
        //this.filteredProducts = this.products;
        this.listFilter = '';
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    changeTitle(title:string): void {
        this.pageTitle = title;
    }

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
}