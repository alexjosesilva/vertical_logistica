const orderService = require('/services/orderService');
const fileHandler = require('/utils/fileHandler');
const fs = require('fs');

test('processFile should process the file correctly', () => {
    const data = `
    0000000002                                     Medeiros00000123450000000111      256.2420201201
    0000000001                                      Zarelli00000001230000000111      512.2420211201
    0000000001                                      Zarelli00000001230000000122      512.2420211201
    0000000002                                     Medeiros00000123450000000122      256.2420201201
    `.trim();
    fs.writeFileSync('/tmp/orders.txt', data);
    const processedOrders = orderService.processFile('/tmp/orders.txt');
    expect(processedOrders).toHaveLength(2);
    expect(processedOrders[0].user_id).toBe(2);
    expect(processedOrders[1].user_id).toBe(1);
});
