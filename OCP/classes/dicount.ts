export abstract class Discount {
  protected discount = 0;

  calculate(value: number): number {
    return value - value * this.discount;
  }
}

// Value of discount
export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class NoDoscount extends Discount {}
