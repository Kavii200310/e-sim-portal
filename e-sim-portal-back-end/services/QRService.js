const db = require('../db'); // Import your existing database connection

const verifyAndActivate = async (code) => {
    try {
        // 1. Check if the QR code exists
        const checkQuery = `SELECT * FROM esim_activations WHERE activation_code = $1`;
        const result = await db.query(checkQuery, [code]);

        if (result.rows.length === 0) {
            return { success: false, message: "Invalid QR Code" };
        }

        const record = result.rows[0];

        // 2. Check if already active
        if (record.status === 'ACTIVE') {
            return { success: false, message: "SIM is already active!" };
        }

        // 3. Activate it
        const updateQuery = `
            UPDATE esim_activations 
            SET status = 'ACTIVE', activated_at = NOW() 
            WHERE activation_code = $1 
            RETURNING *
        `;
        const updateResult = await db.query(updateQuery, [code]);

        return { 
            success: true, 
            data: updateResult.rows[0], 
            message: "Activation Successful" 
        };

    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};

module.exports = { verifyAndActivate };