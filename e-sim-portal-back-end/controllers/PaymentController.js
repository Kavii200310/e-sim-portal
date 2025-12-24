const PaymentService = require('../services/PaymentService');

const processPayment = async (req, res) => {
  
  const { orderId, amount, method, phoneNumber } = req.body;

  
  if (!orderId || !amount || !method || !phoneNumber) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields'
    });
  }

  try {
    // 1. Get the result object from the service (contains paymentId AND activationCode)
    const result = await PaymentService.processMockPayment({ 
        orderId, 
        amount, 
        method, 
        phoneNumber 
    });

    // 2. Send both back to the frontend
    res.status(201).json({
      success: true,
      transactionId: result.paymentId,      // The ID from the payments table
      activationCode: result.activationCode // The new QR string generated
    });

  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  }
};

module.exports = {
  processPayment
};