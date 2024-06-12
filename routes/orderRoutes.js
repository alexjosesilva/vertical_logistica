const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), orderController.uploadFile);
router.get('/', orderController.getOrders);
router.get('/:orderId', orderController.getOrderById);

module.exports = router;


