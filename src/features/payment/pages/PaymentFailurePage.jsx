import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, RotateCcw } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TransactionDetails from '../components/TransactionDetails';
import { useNavigate } from 'react-router-dom';

const transactionDetails = {
    transactionId: "0123-4567-8901",
    date: "24 Aug 2024, 14:32",
    method: "Visa **** 1234",
    amountAttempted: "LKR 1,299.00"
};

const PaymentFailurePage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <Header />
                </div>
            </div>

            <main className="flex-1 container mx-auto px-4 py-8 max-w-lg space-y-6">

                {/* Failure Message Card */}
                <Card className="flex flex-col items-center p-8 text-center space-y-4 border-none shadow-sm rounded-3xl">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-2">
                        <X className="w-10 h-10 text-red-500" />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900">Payment Unsuccessful!</h1>
                    <p className="text-gray-500 text-sm px-4">
                        We were unable to process your payment for the new eSIM. This could be due to insufficient funds or a network error.
                    </p>
                </Card>

                <TransactionDetails details={transactionDetails} />

                <div className="space-y-3">
                    <Button
                        onClick={() => navigate('/payment')}
                        className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold rounded-xl"
                    >
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Try Again
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full bg-gray-100 hover:bg-gray-200 border-none h-12 text-base font-semibold text-gray-900 rounded-xl"
                    >
                        Go to Payment History
                    </Button>
                </div>

                <div className="text-center">
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                        Need help? Contact Support
                    </a>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default PaymentFailurePage;
