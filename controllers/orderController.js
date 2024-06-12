const orderService = require('../services/orderService');

exports.uploadFile = async (req, res) => {
    try {
        const filePath = req.file.path;
        const response = await orderService.processFile(filePath);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const orders = await orderService.getOrders({ startDate, endDate });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await orderService.getOrderById(orderId);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
