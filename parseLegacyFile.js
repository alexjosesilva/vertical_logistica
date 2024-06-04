const fs = require('fs');

function parseLegacyFile(filePath) {
    const orders = [];
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n');

    lines.forEach(line => {
        if (line.trim().length > 0) {
            const userId = parseInt(line.substring(0, 10).trim());
            const userName = line.substring(10, 55).trim();
            const orderId = parseInt(line.substring(55, 65).trim());
            const productId = parseInt(line.substring(65, 75).trim());
            const productValue = parseFloat(line.substring(75, 87).trim());
            const orderDate = line.substring(87, 95).trim();

            orders.push({
                user_id: userId,
                user_name: userName,
                order_id: orderId,
                product_id: productId,
                product_value: productValue,
                order_date: orderDate
            });
        }
    });

    return orders;
}

module.exports = parseLegacyFile;
