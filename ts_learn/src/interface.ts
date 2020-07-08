export interface IOrder {
    calculateTotal(): number;
}

export function calculateTotalAmount(order: IOrder) {
    let total = order.calculateTotal();
    const discount = total *.1;
    total -= discount;
    const tax = total *.2;
    total += tax;
    return total;      
}

export class ShoppingCart implements IOrder {
    calculateTotal(){
        return 100;
    } 
}

const cart = new ShoppingCart();
console.log(`The cart's total is ${calculateTotalAmount(cart)}`)

  