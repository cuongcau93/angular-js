
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    //selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService ){
        //this.products = this._productService.getProducts();
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    
    onRatingClicked(message: string) : void{
        this.pageTitle = 'Product List: '+ message;
    }

    ngOnInit(): void{
        // observable nos se co subscribe
         //this.products = this._productService.getProducts();
         this._productService.getProducts()
             .subscribe((product : IProduct[]) => this.products = product,
                         (error : any) => this.errorMessage = <any>error);
         console.log(this._productService.getProducts());
    }
    
}
