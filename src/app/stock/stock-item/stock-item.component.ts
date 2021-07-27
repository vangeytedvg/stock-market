import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public stock!: Stock;

  constructor() {}

  ngOnInit(): void {
    this.stock = new Stock('Test Company', 'TSC', 85, 80);
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
    this.stock.favorite = !this.stock.favorite;
  }

  addItem() {
    this.stock.itemCount += 1;
  }

  removeItem() {
    this.stock.itemCount = this.stock.itemCount - 1;
  }
}
