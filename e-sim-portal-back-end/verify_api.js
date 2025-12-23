const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';

async function verify() {
    console.log('--- Starting Verification ---');


    try {
        console.log('Testing GET /api/numbers...');
        const res = await axios.get(`${BASE_URL}/numbers`);
        console.log('✅ GET /api/numbers success:', res.status);
        console.log('   Data length:', res.data.length);
    } catch (error) {
        console.error('❌ GET /api/numbers failed:', error.message);
    }

    
    try {
        console.log('\nTesting POST /api/pay...');
        const payload = {
            orderId: 'ORDER-12345',
            amount: 99.99,
            method: 'credit_card'
        };
        const res = await axios.post(`${BASE_URL}/pay`, payload);
        console.log('✅ POST /api/pay success:', res.status);
        console.log('   Response:', res.data);
    } catch (error) {
        console.error('❌ POST /api/pay failed:', error.message);
        if (error.response) {
            console.error('   Error Data:', error.response.data);
        }
    }

    console.log('\n--- Verification Complete ---');
}

verify();
