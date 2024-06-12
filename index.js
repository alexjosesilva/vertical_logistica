const express = require('express');
const app = express();
const orderRoutes = require('./routes/orderRoutes');

app.use(express.json());
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
