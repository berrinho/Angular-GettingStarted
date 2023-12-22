import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

cropWidth: number=60;
@Input() rating: number=4;
@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75/5;
    }

    userClicksStars() {
        console.log(`this product has ${this.rating} stars`);
        this.ratingClicked.emit(`this product has ${this.rating} stars`);
    }

}