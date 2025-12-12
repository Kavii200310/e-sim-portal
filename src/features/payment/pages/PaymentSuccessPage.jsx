import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TransactionDetails from '../components/TransactionDetails';

const transactionDetails = {
    transactionId: "0123-4567-8901",
    date: "24 Aug 2024, 14:32",
    method: "Visa **** 1234",
    amount: "LKR 1,299.00"
};

const PaymentSuccessPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <Header />
                </div>
            </div>

            <main className="flex-1 container mx-auto px-4 py-8 max-w-lg space-y-6">

                {/* Success Message Card */}
                <Card className="flex flex-col items-center p-8 text-center space-y-4 border-none shadow-sm">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                        <Check className="w-8 h-8 text-green-600" />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900">Payment Successful!</h1>
                    <p className="text-gray-500 text-sm">
                        Your new eSIM has been purchased and is ready for activation. You will receive an email shortly with the details.
                    </p>
                </Card>

                {/* Transaction Details Card */}
                {/* Transaction Details Card */}
                <TransactionDetails details={transactionDetails} />

                <Button className="w-full bg-blue-600 hover:bg-blue-700 h-11 text-base">
                    Continue to My eSIMs
                </Button>

            </main>

            <Footer />
        </div>
    );
};

export default PaymentSuccessPage;
