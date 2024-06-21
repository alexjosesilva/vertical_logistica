const fs = require('fs');
const fileHandler = require('../utils/fileHandler');
const orders = [];

exports.processFile = async (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
         if (!data.trim()) {
            return []; // Retorna um array vazio se o arquivo estiver vazio
        }
        const lines = data.split('\n');
        const processedOrders = fileHandler.processLines(lines);
        orders.push(...processedOrders);
        return processedOrders;
    } catch (error) {
        console.error('Erro ao processar o arquivo:', error);
        throw error; // ou retorne um valor de erro apropriado
    }
};

exports.getOrders = ({ startDate, endDate }) => {
    let filteredOrders = orders;
    if (startDate && endDate) {
        filteredOrders = orders.filter(order => {
            const orderDate = new Date(order.date);
            return orderDate >= startDate && orderDate <= endDate;
        });
    }
    return filteredOrders;
};

exports.getOrderById = (orderId) => {
    if (typeof orderId !== 'number') {
        throw new Error('orderId deve ser um número.');
    }
    return orders.find(order => order.order_id === parseInt(orderId, 10));
};
