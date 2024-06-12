const fs = require('fs');
const fileHandler = require('../utils/fileHandler');
const orders = [];

exports.processFile = async (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    const processedOrders = fileHandler.processLines(lines);
    orders.push(...processedOrders);
    return processedOrders;
};

exports.getOrders = ({ startDate, endDate }) => {
    let filteredOrders = orders;
    if (startDate && endDate) {
        filteredOrders = orders.filter(order => order.date >= startDate && order.date <= endDate);
    }
    return filteredOrders;
};

exports.getOrderById = (orderId) => {
    return orders.find(order => order.order_id === parseInt(orderId, 10));
};
