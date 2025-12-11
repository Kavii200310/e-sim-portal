import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const PaymentSuccessPage = () => {
    const navigate = useNavigate();

    // Mock Transaction Data
    const transactionDetails = {
        transactionId: "0123-4567-8901",
        date: "24 Aug 2024, 14:32",
        paymentMethod: "Visa **** 1234",
        amountPaid: "LKR 1,299.00"
    };

    return (
        <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans">
            {/* Header - Reusing minimal header or just sticking to the content center */}
            <header className="bg-white border-b border-gray-100 py-4 mb-8">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        {/* Telco Logo Placeholder */}
                        <div className="w-8 h-8 bg-[#1A56DB] rounded-full flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                                <path d="M2 17L12 22L22 17" />
                                <path d="M2 12L12 17L22 12" />
                            </svg>
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Telco Lanka</span>
                    </div>
                    {/* User Profile Placeholder */}
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                </div>
            </header>

            <main className="grow flex flex-col items-center px-4">
                <Card className="w-full max-w-lg bg-white shadow-sm border border-gray-100 mb-6">
                    <CardContent className="flex flex-col items-center pt-8 pb-8 px-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <Check className="text-green-500 w-8 h-8" strokeWidth={3} />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
                        <p className="text-gray-500 leading-relaxed">
                            Your new eSIM has been purchased and is ready for activation. You will receive an email shortly with the details.
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full max-w-lg bg-white shadow-sm border-gray-100 mb-8">
                    <CardContent className="p-0">
                        <div className="flex justify-between items-center p-5 border-b border-gray-100">
                            <span className="text-gray-500 font-medium text-sm">Transaction ID</span>
                            <span className="text-gray-900 font-medium text-sm">{transactionDetails.transactionId}</span>
                        </div>
                        <div className="flex justify-between items-center p-5 border-b border-gray-100">
                            <span className="text-gray-500 font-medium text-sm">Date</span>
                            <span className="text-gray-900 font-medium text-sm">{transactionDetails.date}</span>
                        </div>
                        <div className="flex justify-between items-center p-5 border-b border-gray-100">
                            <span className="text-gray-500 font-medium text-sm">Payment Method</span>
                            <span className="text-gray-900 font-medium text-sm">{transactionDetails.paymentMethod}</span>
                        </div>
                        <div className="flex justify-between items-center p-5 bg-gray-50/30">
                            <span className="text-gray-500 font-medium text-sm">Amount Paid</span>
                            <span className="text-gray-900 font-bold text-sm">{transactionDetails.amountPaid}</span>
                        </div>
                    </CardContent>
                </Card>

                <Button
                    className="w-full max-w-xs bg-[#1A56DB] hover:bg-[#1546b3] text-white py-6 text-sm font-semibold mb-12"
                    onClick={() => navigate('/wallet/qr-delivery')}
                >
                    Continue to My eSIMs
                </Button>

                <footer className="py-8 flex gap-6 text-gray-400 text-xs mt-auto">
                    <span className="hover:text-gray-500 cursor-pointer">Help Center</span>
                    <span className="hover:text-gray-500 cursor-pointer">Terms of Service</span>
                    <span className="hover:text-gray-500 cursor-pointer">Privacy Policy</span>
                </footer>
                <div className="text-gray-400 text-xs pb-8">
                    © 2024 Telco Lanka. All Rights Reserved.
                </div>
            </main>
        </div>
    );
};

export default PaymentSuccessPage;
