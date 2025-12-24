import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Header from '@/components/Layout/Header.jsx'; // Corrected capitalization based on previous files
import Footer from '@/components/Layout/Footer.jsx';
// Assuming TransactionDetails exists, if not, you can remove that line
// import TransactionDetails from '../components/payment/TransactionDetails'; 

const PaymentSuccessPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    // Safely access state in case user goes to URL directly
    const activationCode = state?.activationCode;

    const transactionDetails = {
        transactionId: state?.transactionId || "N/A",
        date: state?.date ? new Date(state.date).toLocaleString() : "N/A",
        method: state?.method || "N/A",
        amount: state?.amount || "N/A"
    };

    const handleContinue = () => {
        // Forward the specific code to the QR page
        navigate('/qr-scan', { 
            state: { code: activationCode } 
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <Header />
                </div>
            </div>

            <main className="flex-1 container mx-auto px-4 py-8 max-w-lg space-y-6">

                <Card className="flex flex-col items-center p-8 text-center space-y-4 border-none shadow-sm">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                        <Check className="w-8 h-8 text-green-600" />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900">
                        Payment Successful!
                    </h1>

                    <p className="text-gray-500 text-sm">
                        Your new eSIM has been purchased and is ready for activation.
                    </p>
                </Card>

                {/* Display simplified details directly if Component not found */}
                <Card className="p-6 text-sm text-gray-600 space-y-2">
                    <div className="flex justify-between">
                        <span>Transaction ID:</span>
                        <span className="font-medium text-gray-900">{transactionDetails.transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-medium text-gray-900">{transactionDetails.amount}</span>
                    </div>
                </Card>

                <Button 
                    onClick={handleContinue}
                    className="w-full bg-blue-600 hover:bg-blue-700 h-11 text-base"
                >
                    Activate eSIM Now
                </Button>
            </main>

            <Footer />
        </div>
    );
};

export default PaymentSuccessPage;