import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoopingCart } from "./entities/shooping-cart";

const shoopingCart = new ShoopingCart();
const persistency = new Persistency();
const messaging = new Messaging();

const order = new Order(shoopingCart, messaging, persistency);


shoopingCart.addItem(new Product("camisa", 89.90));
shoopingCart.addItem(new Product("Copo", 30.50));
shoopingCart.addItem(new Product("livro", 300.90));

console.log(shoopingCart.items);
console.log(shoopingCart.total());
console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);