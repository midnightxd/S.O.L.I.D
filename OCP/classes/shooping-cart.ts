import { Discount } from './dicount';
import { CartItem } from './interfaces/cart-item';

export class ShoopingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discountStrater: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discountStrater.calculate(this.total());
  }

  isCartEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras está limpo');
    this._items.length = 0;
  }
}
