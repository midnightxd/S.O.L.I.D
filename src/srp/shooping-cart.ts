type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoopingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isCartEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com o total de: ${this.total} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isCartEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Messagem enviada', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho de compras está limpo');
    this._items.length = 0;
  }
}

const shoopingCart = new ShoopingCart();

shoopingCart.addItem({ name: 'Camiseta', price: 79 });
console.log(shoopingCart.items);
