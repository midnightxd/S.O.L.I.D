export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 50;

  calculate(price: number): number {
    return price - price * (this.discount * 100);
  }
}

export class NoDoscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
