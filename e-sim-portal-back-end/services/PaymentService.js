const pool = require('../db');
const { v4: uuidv4 } = require('uuid'); // Import UUID generator

const processMockPayment = async (data) => {
  const { orderId, amount, method, phoneNumber } = data;

  try {
    // 1. Update the number status to 'success' (sold)
    await pool.query(
      "UPDATE numbers SET status = 'success' WHERE phone_number = $1",
      [phoneNumber]
    );

    // 2. Record the payment
    const paymentQuery = `
      INSERT INTO public.payments (order_id, amount, payment_method, status)
      VALUES ($1, $2, $3, 'success')
      RETURNING id
    `;
    
    const paymentValues = [
      orderId,
      Number(amount), 
      method
    ];

    const paymentResult = await pool.query(paymentQuery, paymentValues);

    // ---------------------------------------------------------
    // 3. AUTOMATIC QR CODE GENERATION
    // ---------------------------------------------------------
    
    // Generate a unique string: LPA:1$esim.telco.com$[UNIQUE-ID]
    const uniqueId = uuidv4().replace(/-/g, '').toUpperCase().substring(0, 12);
    const activationCode = `LPA:1$esim.telco.com$${uniqueId}`;

    // Insert into the activation table so the "Scan" page can find it later
    const activationQuery = `
      INSERT INTO esim_activations (activation_code, phone_number, status)
      VALUES ($1, $2, 'PENDING')
      RETURNING activation_code
    `;

    await pool.query(activationQuery, [activationCode, phoneNumber]);

    // 4. Return both the Payment ID AND the new Activation Code
    return {
      paymentId: paymentResult.rows[0].id,
      activationCode: activationCode 
    };

  } catch (error) {
    console.error("Error in processMockPayment:", error);
    throw error; // Rethrow so the controller knows something failed
  }
};

module.exports = {
  processMockPayment
};