import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  name!: string;
  code!: string;
  price!: number;
  previousPrice!: number;
  positiveChange!: boolean;
  favorite!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  /*
    New function (page 26)
    Notice that there is a difference here with the book.  I had to add :Event as type
    */
  toggleFavorite(event: Event) {
    /*
      The button becomes disabled when clicked, because we change
      the value of the favorite variable.
    */
    console.log('State of the Union :-)', event);
    this.favorite = !this.favorite;
  }
}
