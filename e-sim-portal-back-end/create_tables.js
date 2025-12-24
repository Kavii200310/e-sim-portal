const pool = require('./db');

const createTables = async () => {
    try {
        console.log('--- Creating Tables ---');

        
        const createNumbersTable = `
            CREATE TABLE IF NOT EXISTS numbers (
                id SERIAL PRIMARY KEY,
                phone_number VARCHAR(15) UNIQUE NOT NULL,
                category VARCHAR(10), -- 'Gold', 'Silver', 'Normal'
                status VARCHAR(10) DEFAULT 'available',
                price DECIMAL(10, 2)
            );
        `;
        await pool.query(createNumbersTable);
        console.log('✅ Created table: numbers');

        
        const createPaymentsTable = `
            CREATE TABLE IF NOT EXISTS payments (
                id SERIAL PRIMARY KEY,
                order_id VARCHAR(50) NOT NULL,
                amount DECIMAL(10, 2) NOT NULL,
                status VARCHAR(20) DEFAULT 'success',
                payment_method VARCHAR(20),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await pool.query(createPaymentsTable);
        console.log('✅ Created table: payments');

        
        const countRes = await pool.query('SELECT COUNT(*) FROM numbers');
        if (parseInt(countRes.rows[0].count) === 0) {
            console.log('Seeding numbers...');
            const seedQuery = `
                INSERT INTO numbers (phone_number, category, price) VALUES
                ('0771234567', 'Gold', 5000.00),
                ('0777654321', 'Silver', 2500.00),
                ('0771122334', 'Normal', 1000.00);
            `;
            await pool.query(seedQuery);
            console.log('✅ Seeded dummy numbers');
        }

        console.log('--- Database Initialization Complete ---');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error creating tables:', err);
        process.exit(1);
    }
};

createTables();
