// Encapsulate stocks
export class Stock {
  favorite: boolean = false;
  itemCount: number = 10;

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number
  ) {}

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }
}
