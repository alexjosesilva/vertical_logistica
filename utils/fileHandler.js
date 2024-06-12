exports.processLines = (lines) => {
    const ordersMap = new Map();

    lines.forEach(line => {
        const userId = parseInt(line.substring(0, 10).trim(), 10);
        const userName = line.substring(10, 55).trim();
        const orderId = parseInt(line.substring(55, 65).trim(), 10);
        const productId = parseInt(line.substring(65, 75).trim(), 10);
        const value = parseFloat(line.substring(75, 87).trim());
        const date = formatDateString(line.substring(87, 95).trim());

        if (!ordersMap.has(orderId)) {
            ordersMap.set(orderId, {
                user_id: userId,
                name: userName,
                orders: []
            });
        }

        const order = ordersMap.get(orderId);
        const existingOrder = order.orders.find(o => o.order_id === orderId);

        if (existingOrder) {
            existingOrder.products.push({ product_id: productId, value: value.toFixed(2) });
            existingOrder.total = (parseFloat(existingOrder.total) + value).toFixed(2);
        } else {
            order.orders.push({
                order_id: orderId,
                total: value.toFixed(2),
                date: date,
                products: [{ product_id: productId, value: value.toFixed(2) }]
            });
        }
    });

    return Array.from(ordersMap.values());
};

const formatDateString = (dateString) => {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${year}-${month}-${day}`;
};
