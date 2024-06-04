function transformOrders(orders) {
    const users = {};

    orders.forEach(order => {
        const userId = order.user_id;
        if (!users[userId]) {
            users[userId] = {
                user_id: userId,
                name: order.user_name,
                orders: []
            };
        }

        let userOrders = users[userId].orders;
        let orderExists = userOrders.find(o => o.order_id === order.order_id);

        if (!orderExists) {
            userOrders.push({
                order_id: order.order_id,
                total: 0,
                date: order.order_date,
                products: []
            });
        }

        let orderObj = userOrders.find(o => o.order_id === order.order_id);
        orderObj.products.push({
            product_id: order.product_id,
            value: order.product_value
        });
        orderObj.total += order.product_value;
    });

    return Object.values(users);
}

module.exports = transformOrders;
