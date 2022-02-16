class Order {
  constructor(orderId, items, totalAmount, orderDate) {
    this.id = orderId;
    this.items = items;
    this.totalAmount = totalAmount;
    this.orderDate = orderDate;
  }
}

export default Order;
