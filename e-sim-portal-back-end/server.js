require('dotenv').config();
const pool = require('./db')
const express = require('express');
const cors = require('cors');

const NumberController = require('./controllers/NumberController');
const PaymentController = require('./controllers/PaymentController');
const QRController = require('./controllers/QRController');
const app = express();

app.use(cors());
app.use(express.json());


app.get('/api/numbers', NumberController.getAvailableNumbers);
app.post('/api/numbers/lock/:id', NumberController.lockNumber);
app.post('/api/pay', PaymentController.processPayment);
app.post('/api/qr/scan', QRController.scanQRCode);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
