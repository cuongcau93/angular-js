import { Component, Input, OnChanges, Output, EventEmitter, OnInit } from "@angular/core";
import { IProduct } from '../products/product';
import { ProductService } from '../products/product.service';


@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls:['star.component.css']
})
export class StarComponent implements OnChanges, OnInit {

    products: IProduct[];

    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked :  EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
    
    onClick(){
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
    }

    constructor(private _products: ProductService){
        //this.products = this._products.getProducts();
    }

    ngOnInit(): void {
        //console.log(this._products.getProducts());    
    }
}