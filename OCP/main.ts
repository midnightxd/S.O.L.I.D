import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoopingCart } from './classes/shooping-cart';
import { FiftyPercentDiscount } from './classes/dicount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoopingCart = new ShoopingCart(fiftyPercentDiscount);
const persistency = new Persistency();
const messaging = new Messaging();

const order = new Order(shoopingCart, messaging, persistency);

shoopingCart.addItem(new Product('camisa', 89.9));
shoopingCart.addItem(new Product('Copo', 30.5));
shoopingCart.addItem(new Product('livro', 300.9));

console.log(shoopingCart.items);
console.log(shoopingCart.total());
console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);

