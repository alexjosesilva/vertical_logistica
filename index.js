const express = require('express');
const multer = require('multer');
const parseLegacyFile = require('./parseLegacyFile');
const transformOrders = require('./transformOrders');

const app = express();
const upload = multer({ dest: 'uploads/' });
let transformedOrders = [];

app.use(express.json());

app.post('/upload', upload.single('file'), (req, res) => {
    const filePath = req.file.path;
    const orders = parseLegacyFile(filePath);
    transformedOrders = transformOrders(orders);
    res.json(transformedOrders);
});

app.get('/orders', (req, res) => {
    // Adicione lógica de filtragem aqui
    res.json(transformedOrders);  // Lista de pedidos transformados
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
